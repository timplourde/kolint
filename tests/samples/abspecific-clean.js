var vm = {
    foo: "yes",
    bar: "no"
};

ko.applyBindings(vm, document.getElementById("app1"));

ko.applyBindings(vm, $("app2")[0]);