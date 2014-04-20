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
        target = null,
        options = {
            jsonReportFile : null,
            debug: false
        },
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

    function debug(message){
        if(options.debug){
            console.log(message);
        }
    }

    // recursively search upwards to find a .kohintrc file and return its contents
    function getConfig(dir) {
        var file = path.normalize(path.join(dir, CONFIG_FILE_NAME)),
            parent = path.resolve(dir, "../");

        if (dir === parent){
            // got to the root
            return {};
        }

        if(fs.existsSync(file)) {
            debug(com.outputPrefix + "using settings in "+file);
            return JSON.parse(fs.readFileSync(file, "utf8"));
        }

        getConfig(parent);
    }

    function processFile(file, callback) {
        debug(com.outputPrefix + "processing "+ file);
        kolint.validateFile(file, function(error, lintErrors) {
            fileCounter += 1;
            if(error) {
                console.log(com.outputPrefix + "error processing file "+ file + " : " + error);
            } else if (lintErrors.length) {
                reports.push({
                    file: file,
                    errors: lintErrors
                });
            }
            if(fileCounter === numFiles) {
                callback();
            }
        });
    }

    function onlyJSFiles(arrayOfFiles){
        return _.filter(arrayOfFiles, function(f){
            return /.js$/.test(f);
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
        }

        console.log("");
        console.log(totalErrors + " errors");

        if(options.jsonReportFile){
            try{
                fs.writeFileSync(options.jsonReportFile, JSON.stringify({ kolintErrors : reports}, null, 2));
            }catch(e){
                console.log("Failed while trying to write the JSON report to: "+options.jsonReportFile);
                throw e;
            }
            
        }

        if(reports.length){
            process.exit(1);
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
                filesToIgnore = onlyJSFiles(filesToIgnore);
            }
            callback(filesToIgnore);
        }
        else {
            callback([]);
        }
    }

    function run() {
        var config = getConfig(process.cwd());
        kolint = new KOLint(config);

        gatherFilesToIgnore(function(filesToIgnore) {
            glob(target, function (err, files) {
                if (err) {
                    throw err;
                }

                // only interested in .js files
                files = onlyJSFiles(files);

                debug(com.outputPrefix + "found " + files.length + " .js files");
                
                if(filesToIgnore.length){
                    debug(com.outputPrefix + "ignoring " + filesToIgnore.length + " .js files found in .kolintignore");
                    files = _.difference(files, filesToIgnore);
                    debug(com.outputPrefix + "processing filtered batch of " + files.length + " .js files");
                }

                numFiles = files.length;
                _.each(files, function(file) {
                    processFile(file, finalReport);
                });
            });
        });
       
    }

    function setOptions(optionsArray) {
        _.each(optionsArray, function(option){
            var jsonReport;
            if(/^--jsonOut=/.test(option)) {
                jsonReport = option.split("=")[1];
                if(jsonReport){
                    options.jsonReportFile = jsonReport;
                }
            } else if(/^--debug/.test(option)){
                options.debug = true;
            }
        });
    }

    if (process.argv.length >= 3){
        target = process.argv[2];
        if(process.argv.length > 3) {
            setOptions(process.argv.slice(3));
        }
        run();
    } else {
        console.log("Usage : kolint <files> <options>");
        console.log("Args:");
        console.log("<files>    : file(s) in glob format e.g. some/dir/**/*.js");
        console.log("<options>  : optional");
        console.log("   --jsonOut=filename : write report in json format to specified file name");
        console.log("   --debug : output debug messages");
        process.exit(1);
    }

})();
