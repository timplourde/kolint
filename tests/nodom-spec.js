
var nodom = require("../src/rules/nodom");

describe("nodom", function () {
    "use strict";
    var expectedMessage = "nodom: DOM access found outside of a bindingHandler",
        expectError = function (error, line) {
            expect(error.message).toEqual(expectedMessage);
            expect(error.line).toEqual(line);
        };

    it("finds no errors in clean code", function () {
        var ast = require("./samples/ast/nodom-clean").ast,
            errors = nodom(ast);
        expect(errors).toEqual([]);
    });

    it("finds errors in dirty code", function () {
        var ast = require("./samples/ast/nodom-dirty").ast,
           errors = nodom(ast);

        expect(errors.length).toEqual(8);

        expectError(errors[0], 4);
        expectError(errors[1], 5);
        expectError(errors[2], 6);
        expectError(errors[3], 7);

        expectError(errors[4], 15);
        expectError(errors[5], 16);
        expectError(errors[6], 17);
        expectError(errors[7], 18);

    });
});