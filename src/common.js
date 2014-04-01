(function () {
    "use strict";
    module.exports = {
        constants: {
            outputPrefix: "kolint: ",
            ast: {
                EXPRESSION_STATEMENT: "ExpressionStatement",
                CALL_EXPRESSION: "CallExpression",
                MEMBER_EXPRESSION: "MemberExpression",
                ASSIGNMENT_EXPRESSION: "AssignmentExpression",
                IDENTIFIER: "Identifier",
                LITERAL: "Literal"
            }
        },
        funcs : {
            addError: function (errors, message, node) {
                errors.push({
                    message: message,
                    line: node.loc.start.line
                });
            }
        }
    };
})();