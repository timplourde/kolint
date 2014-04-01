var vm = {
    observableThing: ko.observable()
};

function ViewModelCtor() {
    var a = ko.observable();
    return {
        a: a
    };
}

// it's ok to have DOM manipulation inside binding handlers
ko.bindingHandlers.foo = {
    init: function () {
        $(".james").on("click", function () { });
        $("#joe").on("click", function () { });
        document.getElementById("hello");
    },
    update: function () {
        document.getElementsByClassName("foo");
    }
};

// it's ok to have dom code when calling apply bindings
// hopefully this is not inside a ViewModel...
ko.applyBindings(vm, document.getElementById("app"));
ko.applyBindings(vm, $("#app")[0]);