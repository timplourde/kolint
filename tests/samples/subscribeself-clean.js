var vm = {
    observableThing: ko.observable()
};

vm.observableThing.subscribe(function (newVal) {
    // it's ok to _read_ the same observable here, not sure why you'd want to do that...
    var foo = vm.observableThing(); 
});

function ViewModelCtor() {
    var a = ko.observable();
    a.subscribe(function (newVal) {
        console.log(newVal);
    });
    return {
        a: a
    };
}

