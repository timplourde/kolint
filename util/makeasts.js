// generates .ast.js files from the .js files in the tests/samples directory
// they are useful when writing rules
// to run this, execute "grunt make-ast-files" from the root

var fs = require('fs'),
	esprima = require("esprima"),
    _ = require("underscore"),
	encoding = { encoding: 'utf-8' },
	PATH_TO_SAMPLES = "tests/samples",
    PATH_TO_AST = "tests/samples/ast";

var writeAst = function (fileName, code) {
    "use strict";
    var js, ast, outputFile;

    ast = esprima.parse(code, {
        loc: true,
        comment: true
    });
    js = "// DO NOT MODIFY, THIS WAS AUTO_GENERATED\n\n";
    js += "exports.ast = " + JSON.stringify(ast, null, " ") + ";";
    outputFile = PATH_TO_AST + "/" + fileName;
    console.log("writing " + outputFile);
    fs.writeFile(outputFile, js);
};

var handleFiles = function (err, files) {
    "use strict";
    var fileName,
        jsReg = /.js$/;

    _.each(files, function (fileName) {
        if (jsReg.test(fileName)) {
            console.log("found " + fileName);
            fs.readFile(PATH_TO_SAMPLES + "/" + fileName, encoding, function (err, contents) {
                if (!err) {
                    writeAst(fileName, contents);
                }
            });
        }
    });
};

console.log("Generateing ASTs for each .js file in samples...");

if (!fs.existsSync(PATH_TO_AST)) {
    console.log(PATH_TO_AST + " does not exist, creating...");
    fs.mkdirSync(PATH_TO_AST, function (err) {
        if (err) throw err;
    });
}

fs.readdir(PATH_TO_SAMPLES, handleFiles);