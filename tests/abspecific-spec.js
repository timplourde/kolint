
var abspecific = require("../src/rules/abspecific");

describe("abspecific", function () {
    "use strict";

    it("finds no errors in clean code", function () {
        var ast = require("./samples/ast/abspecific-clean").ast,
            errors = abspecific(ast);
        expect(errors).toEqual([]);
    });

    it("finds errors in dirty code", function () {
        var ast = require("./samples/ast/abspecific-dirty").ast,
            errors = abspecific(ast);

        expect(errors.length).toEqual(1);
        expect(errors[0].message).toEqual("abspecific: ko.applyBindings should always specify a DOM node");
        expect(errors[0].line).toEqual(6);
    });
});