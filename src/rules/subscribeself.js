
var common = require("../common"),
    estraverse = require("estraverse"),
    commonFuncs = common.funcs,
    AST = common.constants.ast;

function subscribeself (ast) {
    "use strict";
    var message = "subscribeself: updating the target observable inside a subscription",
        errors = [],
        insideSubscription,
        targetObservableName;

    function isSubscriptionCall(node) {
        return node.type === AST.CALL_EXPRESSION &&
            node.callee.type === AST.MEMBER_EXPRESSION &&
            node.callee.property.name === "subscribe";
    }

    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (insideSubscription && node.type === AST.CALL_EXPRESSION) {
                if (node.callee.type === AST.MEMBER_EXPRESSION &&
                    node.callee.property.name === targetObservableName) {

                    // e.g. vm.myObservable("foo")
                    commonFuncs.addError(errors, message, node);

                } else if (node.callee.type === AST.IDENTIFIER &&
                    node.callee.name === targetObservableName) {

                    // e.g. myObservable("foo")
                    commonFuncs.addError(errors, message, node);
                }
            } else {
                // detect if this node sets up a subscription
                if (isSubscriptionCall(node)) {
                    node.isKnockoutSubscription = true;
                    insideSubscription = true;
                    if (node.callee.object.type === AST.MEMBER_EXPRESSION) {

                        /// e.g. vm.myObservable.subscribe("foo")
                        targetObservableName = node.callee.object.property.name;

                    } else if (node.callee.object.type === AST.IDENTIFIER) {

                        // e.g. myObservable.subscribe("foo")
                        targetObservableName = node.callee.object.name;
                    }
                }
            }
        },
        leave: function (node, parent) {
            if (insideSubscription && node.isKnockoutSubscription) {
                insideSubscription = false;
            }
        }
    });

    return errors;
}

module.exports = subscribeself;