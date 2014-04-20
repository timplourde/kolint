kolint
======

It's like JSHint for Knockout apps!  It scans your JavaScript code and reports any issues it finds.  Ideally, this should be run on your ViewModels.

This library contains a NPM module which includes a CLI.

## Installation & Usage

Install `node` and `npm` and run this command ( omit the `-g` switch if you don't want it to be registered globally):

`npm install -g kolint`

To run, for example:

`kolint myfile.js`

Usage:

`kolint <files> <options>`

Arguments:

1. files: Path to file(s): in [glob](https://github.com/isaacs/node-glob) format, e.g. `some/folder/**/*.js`

1. options (optional):
    `--jsonOut=filename` : JSON report output file
    `--debug` : output debug messages

Note that only .js files will be processed when the CLI is run.

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
/* BAD */
var vm = {
    doStuff: function() {
        $("myMessage").fadeIn();
    }
}
```

### subscribeself

Never update the observable you're subscribed to.  This is typically done for input sanitization and results in the subsciption firing twice.  Use an [extender](http://knockoutjs.com/documentation/extenders.html) instead.  

```javascript
/* BAD */
var vm = {
    name: ko.observable()
};
vm.name.subscribe(function(newVal){
    vm.name(newVal.toUpperCase());
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

Note: entries in `.kolintignore` must align with the arguments you pass to the CLI.  For example, `.\folder\*` does not equal `folder\*` 

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

// to validate a string...
var errors = kolint.validateString(str);

// to validate a file...
kolint.validateFile(path, callback); 

// The callback is passed two arguments: `(error, lintErrors)`, 
// where `lintErrors` is the array of lint errors
```

## Contributing

`npm install` to download the modules you need.

`grunt` to build, jshint and run tests.  See the `Gruntfile.js` for more info.

The `tests\samples` directory contains sample JS files used in unit tests.  The `make-ast-files` grunt task converts these into AST format and puts them in `tests\samples\ast`.

To run the CLI without linking: `node src/cli.js path/to/file.js`
