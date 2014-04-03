
var KOLint = require("../src/kolint"),
    fs = require("fs"),
    PATH_TO_SAMPLES = "tests/samples";

describe("kolint", function () {
    "use strict";

    it("sets default settings", function () {
        var sut = new KOLint();
        expect(sut.settings).toEqual({
            abspsecific: true,
            nodom: true,
            subscribeself: true
        });
    });

    it("overrides default settings", function () {
        var sut = new KOLint({
            abspsecific: false,
            nodom: false,
            subscribeself: false
        });
        expect(sut.settings).toEqual({
            abspsecific: false,
            nodom: false,
            subscribeself: false
        });
    });

    function readFile(filename, callback) {
        fs.readFile(PATH_TO_SAMPLES + "/" + filename, { encoding: 'utf-8' }, function (err, contents) {
            if (!err) {
                callback(contents);
            }
        });
    }

    it("throws when validating a string which is not JS", function (done) {
        var sut = new KOLint(), errors;
        readFile("notjs.html", function (str) {
            try {
                sut.validateString(str);
            } catch (e) {
                expect(e).toBe("Could not parse code into an AST, please make sure the code is JS and not HTML");
            }
            done();
        });
    });

    it("returns no errors when validating a string with clean code", function (done) {
        var sut = new KOLint(), errors;
        readFile("nodom-clean.js", function (str) {
            errors = sut.validateString(str);
            expect(errors.length).toBe(0);
            done();
        });
    });

    it("returns errors when validating a string with dirty code", function (done) {
        var sut = new KOLint(), errors;
        readFile("nodom-dirty.js", function (str) {
            errors = sut.validateString(str);
            expect(errors.length).toBe(8);
            done();
        });
    });

    it("returns errors from multiple rules when validating a string with dirty code", function (done) {
        var sut = new KOLint(), bigString = "", errors;
        readFile("nodom-dirty.js", function (aStr) {
            bigString += aStr + "\n";
            readFile("abspecific-dirty.js", function (bStr) {
                bigString += bStr + "\n";
                readFile("subscribeself-dirty.js", function (cStr) {
                    bigString += cStr + "\n";

                    errors = sut.validateString(bigString);
                    expect(errors.length).toBe(11);
                    done();
                });
            });
        });
    });

    it("returns no errors when validating a file which is not a JS file", function (done) {
        var sut = new KOLint();
        sut.validateFile(PATH_TO_SAMPLES + "/notjs.html", function (error, lintErrors) {
            console.log(error);
            expect(error).toEqual("Skipping file (not a .js file): tests/samples/notjs.html");
            done();
        });
    });

    it("returns no errors when validating a file with clean code", function (done) {
        var sut = new KOLint();
        sut.validateFile(PATH_TO_SAMPLES + "/abspecific-clean.js", function (error, lintErrors) {
            expect(lintErrors.length).toBe(0);
            done();
        });
        
    });

    it("returns errors when validating a file dirty code", function (done) {
        var sut = new KOLint();
        sut.validateFile(PATH_TO_SAMPLES + "/abspecific-dirty.js", function (error, lintErrors) {
            expect(lintErrors.length).toBe(1);
            done();
        });
    });


});