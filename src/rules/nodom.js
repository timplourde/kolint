
var common = require("../common"),
    estraverse = require("estraverse"),
    _ = require("underscore"),
    commonFuncs = common.funcs,
    AST = common.constants.ast;

function nodom (ast) {
    "use strict";

    var message = "nodom: DOM access found outside of a bindingHandler",
        errors = [];

    estraverse.traverse(ast, {
        enter: function (node, parent) {

            // skip over binding handler definitions, e.g.
            // ko.bindingHandlers.foo = {...}
            if (node.type === AST.EXPRESSION_STATEMENT &&
                node.expression.type === AST.ASSIGNMENT_EXPRESSION &&
                node.expression.operator === "=" &&
                node.expression.left.type === AST.MEMBER_EXPRESSION &&
                node.expression.left.object.type === AST.MEMBER_EXPRESSION &&
                node.expression.left.object.object.type === AST.IDENTIFIER &&
                node.expression.left.object.object.name === "ko" &&
                node.expression.left.object.property.type === AST.IDENTIFIER &&
                node.expression.left.object.property.name === "bindingHandlers") {

                return estraverse.VisitorOption.Skip;
            }

            // skip over calls to applyBindings, which really should not be in ViewModels/Models
            if(node.type === AST.CALL_EXPRESSION &&
                node.callee.type === AST.MEMBER_EXPRESSION &&
                node.callee.property.type === AST.IDENTIFIER &&
                node.callee.property.name === "applyBindings") {

                return estraverse.VisitorOption.Skip;
            }

            // no calls to jQuery selector
            // e.g. $("...") || jQuery("...")
            if (node.type === AST.CALL_EXPRESSION &&
                node.callee.type === AST.IDENTIFIER &&
                ["$", "jQuery"].indexOf(node.callee.name) >= 0) {

                _.each(node.arguments, function (arg) {
                    if (arg.type === AST.LITERAL) {
                        commonFuncs.addError(errors, message, node);
                    }
                });
            }

            // no calls to document
            // e.g. document.getElementById("...")
            if (node.type === AST.EXPRESSION_STATEMENT &&
                node.expression.type === AST.CALL_EXPRESSION &&
                node.expression.callee.type === AST.MEMBER_EXPRESSION &&
                node.expression.callee.object.type === AST.IDENTIFIER &&
                node.expression.callee.object.name === "document") {

                commonFuncs.addError(errors, message, node);
            }
        }
    });

    return errors;
}

module.exports = nodom;