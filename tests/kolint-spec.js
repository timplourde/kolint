
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
        done();
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
        sut.validateFile(PATH_TO_SAMPLES + "/abspecific-dirty.js", function (errors) {
            expect(errors.length).toBe(1);
            done();
        });
    });

    it("returns no errors when validating a file with clean code", function (done) {
        var sut = new KOLint();
        sut.validateFile(PATH_TO_SAMPLES + "/abspecific-clean.js", function (errors) {
            expect(errors.length).toBe(0);
            done();
        });
        
    });

    it("returns errors when validating a file dirty code", function (done) {
        var sut = new KOLint();
        sut.validateFile(PATH_TO_SAMPLES + "/abspecific-dirty.js", function (errors) {
            expect(errors.length).toBe(1);
            done();
        });
    });

});