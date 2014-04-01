
(function () {
    "use strict";

    var fs = require("fs"),
        _ = require("underscore"),
        S = require("string"),
        esprima = require("esprima"),
        estraverse = require("estraverse"),
        com = require("./common"),
        rules = {
            abspsecific: require("./rules/abspecific"),
            nodom: require("./rules/nodom"),
            subscribeself: require("./rules/subscribeself")
        },
        KOLint;

    KOLint = function (options) {
        this.settings = {
            abspsecific: true,
            nodom: true,
            subscribeself: true
        };
        if (options) {
            _.extend(this.settings, options);
        }
    };

    KOLint.prototype.validateString = function (str) {
        var ast, errors = [], settings = {
            nodom: true,
            subscribeself: true,
            abspecific: true
        };

        try {
            ast = esprima.parse(str, {
                loc: true,
                comment: true
            });
        } catch (e) {
            console.log("Could not parse code into an AST");
            throw e;
        }

        _.chain(rules).keys().each(function (rule) {
            var fileErrors = [], fileLines = [];
            if (this.settings[rule]) {
                fileErrors = rules[rule](ast);
                if (fileErrors.length) {
                    fileLines = S(str).lines();
                    fileErrors = _.map(fileErrors, function (error) {
                        error.src = fileLines[error.line - 1];    // ast line numbers are 1-based
                        return error;
                    });
                    errors = errors.concat(fileErrors);
                }
            }
        }.bind(this));

        return errors;
    };

    KOLint.prototype.validateFile = function (file, callback) {
        fs.readFile(file, { encoding: 'utf-8' }, function (err, contents) {
            var lintErrors;
            if (!err && callback) {
                lintErrors = this.validateString(contents);
                callback(lintErrors);
            }
        }.bind(this));
    };

    module.exports = KOLint;

})();