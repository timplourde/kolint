
var common = require("../common"),
    estraverse = require("estraverse"),
    commonFuncs = common.funcs,
    AST = common.constants.ast;

function abspecific (ast) {
    "use strict";

    var message = "abspecific: ko.applyBindings should always specify a DOM node",
        errors = [];

    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (node.type === AST.CALL_EXPRESSION &&
                node.callee.type === AST.MEMBER_EXPRESSION &&
                node.callee.property.type === AST.IDENTIFIER &&
                node.callee.property.name === "applyBindings" &&
                node.arguments.length === 1) {

                commonFuncs.addError(errors, message, node);
            }
        }
    });

    return errors;
}

module.exports = abspecific;