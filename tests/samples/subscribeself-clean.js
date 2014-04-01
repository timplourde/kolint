var vm = {
    observableThing: ko.observable()
};

vm.observableThing.subscribe(function (newVal) {
    console.log(newVal);
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

