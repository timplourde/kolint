var vm = {
    observableA: ko.observable(),
    observableB: ko.observableArray()
};

vm.observableA.subscribe(function (newVal) {
    newVal = newVal.toUpperCase();
    vm.observableA(newVal);
    vm.observableB.push(newVal);
});

function ViewModelCtor() {
    var observableC = ko.observable(),
        observableD = ko.observableArray();
    observableC.subscribe(function (newVal) {
        newVal = newVal.toUpperCase();
        observableC(newVal);
        observableD.push(newVal);
    });
    return {
        observableC: observableC,
        observableD: observableD
    };
}

