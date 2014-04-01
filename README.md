# kolint

It's like JSHint for Knockout apps!  It scans your JavaScript code and reports any issues it finds.  Ideally, this should be run on your ViewModels.

This library contains a NPM module which includes a CLI.

## Installation & Usage

Install `node` and `npm` and run this command ( omit the `-g` switch if you don't want it to be registered globally):

```
npm install -g kolint
```

To run:

```
kolint myfile.js
```

The only argument is in [glob](https://github.com/isaacs/node-glob) format.  For example, to run on all .js files recursively:

```
kolint some/folder/**/*.js
```

## Rules

There are currently three rules defined:

### abspecific

Always specify a DOM node when calling `ko.applyBindings`.  Binding to the entire document is fine in simple scenarios but should be avoided in larger apps.

```javascript
/* BAD */
ko.applyBindings(viewModel);

/* GOOD */
ko.applyBindings(viewModel, document.getElementById("myApp"));
```

### nodom

Never interact with the DOM directly except when in a [custom binding handler](http://knockoutjs.com/documentation/custom-bindings.html).  DOM manipulation inside a ViewModel breaks MVVM, degrades maintainability and complicates unit testing.

```javascript
// BAD
var vm = {
    doStuff: function() {
        $("myMessage").fadeIn();
    }
}
```

### subscribeself

Never update the observable you're subscribed to.  This is typically done for input sanitization and results in the subsciption firing twice.  Use an [extender](http://knockoutjs.com/documentation/extenders.html) instead.  

```javascript
// BAD
var vm = {
    name: ko.observable()
};
vm.name.subscribe(function(newVal){
    name(newVal.toUpperCase());
});
```

## Configuration

All rules are on by default. To specify which rules to use, place a `.kohintrc` file in your current wodking directory (CWD) like so:

```javascript
{
    "abspecific":       true,
    "nodom":            true,
    "subscribeself":    true
}
```

You can also opt-out specific files by saving a `.kolintignore` file in the CWD.  This file should contain glob-style entries on each line like so:

```
gruntfile.js
some/dir/*.js
some/otherDir/**/*.js
```

## API

To use the API directly:

```
var KOLint = require("kolint");

var kolint = new KOLint();

// or, to override default settings
var kolint = new KOLint({
    "abspecific":       false,
    "nodom":            true,
    "subscribeself":    true
});

// to validate a string
kolint.validateString(str); // returns an array or errors

// to validate a file
kolint.validateFile(path, callback); // callback passed an array of errors
```