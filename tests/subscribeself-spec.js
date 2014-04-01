
var subscribeself = require("../src/rules/subscribeself");

describe("subscribeself", function () {
    "use strict";
    var expectedMessage = "subscribeself: updating the target observable inside a subscription",
        expectError = function (error, line) {
            expect(error.message).toEqual(expectedMessage);
            expect(error.line).toEqual(line);
        };

    it("finds no errors in clean code", function () {
        var ast = require("./samples/ast/subscribeself-clean").ast,
           errors = subscribeself(ast);

        expect(errors).toEqual([]);
    });

    it("finds errors in dirty code", function () {
        var ast = require("./samples/ast/subscribeself-dirty").ast,
            errors = subscribeself(ast);

        expect(errors.length).toEqual(2);
        expectError(errors[0], 8);
        expectError(errors[1], 17);
    });
});