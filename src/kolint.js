
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
            throw "Could not parse code into an AST, please make sure the code is JS and not HTML";
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
        if (!callback) {
            return;
        }
        if (!/.js$/.test(file)) {
            callback("Skipping file (not a .js file): " + file);
            return;
        }
        fs.readFile(file, { encoding: 'utf-8' }, function (err, contents) {
            var lintErrors = [];
            if (err) {
                callback(err);
            }
            try {
                lintErrors = this.validateString(contents);
            } catch (e) {
                callback(e);
            }
            callback(null, lintErrors);

        }.bind(this));
    };

    module.exports = KOLint;

})();