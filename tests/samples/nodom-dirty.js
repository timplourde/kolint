var vm = {
    observableThing: ko.observable(),
    doStuff: function () {
        $("#this").focus();
        jQuery(".that").focus();
        $("body").focus();
        document.getElementById("what");
        $.isArray([]);
    }
};

function ViewModelCtor() {
    var a = ko.observable(),
        b = function () {
            $("#this").focus();
            jQuery(".that").focus();
            $("body").focus();
            document.getElementsByClassName("ok");
            jQuery.isArray([]);
        };
    return {
        a: a,
        b: b
    };
}