#! /usr/bin/env node

(function() {
    "use strict";

    var glob = require("glob"),
        path = require("path"),
        fs = require("fs"),
        _ = require("underscore"),
        S = require("string"),
        KOLint = require("./kolint"),
        com = require("./common").constants,
        target = process.argv[2],
        numFiles = 0,
        fileCounter = 0,
        reports = [],
        settings = {
            abspecific: true,
            nodom: true,
            subscribeself: true
        },
        filesToIgnore = {},
        CONFIG_FILE_NAME = ".kolintrc",
        IGNORE_FILE_NAME = ".kolintignore",
        kolint;

    // recursively search upwards to find a .kohintrc file and return its contents
    function getConfig(dir) {
        var file = path.normalize(path.join(dir, CONFIG_FILE_NAME)),
            parent = path.resolve(dir, "../");

        if (dir === parent){
            // got to the root
            return {};
        }

        if(fs.existsSync(file)) {
            console.log(com.outputPrefix + "using settings in "+file);
            return JSON.parse(fs.readFileSync(file, "utf8"));
        }

        getConfig(parent);
    }

    function processFile(file, callback) {
        console.log(com.outputPrefix + "processing "+ file);
        kolint.validateFile(file, function(errors){
            if(errors.length) {
                reports.push({
                    file: file,
                    errors: errors
                });
            }
            fileCounter += 1;
            if(fileCounter === numFiles) {
                callback();
            }
        });
    }

    function finalReport() {
        var totalErrors = 0;
        if (reports.length) {
            _.each(reports, function(report) {
                totalErrors += report.errors.length;
                _.each(report.errors, function(error) {
                    console.log(report.file + ", line "+ error.line + " : " + error.message);
                    console.log("> " + error.src);
                    console.log("");
                });
            });
            console.log("");
            console.log(totalErrors + " errors");
            process.exit(1);
        } else {
            console.log(totalErrors + " errors");
        }
    }

    function gatherFilesToIgnore(callback){
        var ignoreFile =  path.normalize(path.join(process.cwd(), IGNORE_FILE_NAME)),
            lines,
            filesToIgnore = [];

        if(fs.existsSync(ignoreFile)){
            lines = S(fs.readFileSync(ignoreFile, "utf8")).lines();
            if(lines.length) {
                _.each(lines, function(line) {
                    if(line.length){
                        filesToIgnore = filesToIgnore.concat(glob.sync(line));
                    }
                });
            }
            callback(filesToIgnore);
        }
        else {
            callback([]);
        }
    }

    function run() {
        kolint = new KOLint(getConfig(process.cwd()));

        gatherFilesToIgnore(function(filesToIgnore){
            glob(target, function (err, files) {
                if (err) {
                    throw err;
                }
                if(filesToIgnore.length){
                    console.log(com.outputPrefix + "ignoring " + filesToIgnore.length + " files");
                }
                files = _.difference(files, filesToIgnore);
                numFiles = files.length;
                _.each(files, function(file) {
                    processFile(file, finalReport);
                });
            });
        });
       
    }

    if (process.argv.length === 3){
        run();
    } else {
        console.log("Usage : kolint [file or glob], e.g. kolint some/folder/**/*.js");
        process.exit(1);
    }

})();
