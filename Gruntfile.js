module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['tests/samples/ast'],
        jshint: {
            options: {
                jshintrc: true,
                ignores: ["tests/samples/**/*.js"]
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js']
        },
        execute: {
            makeasts: {
                src: ['util/makeasts.js']
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['tests/']
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'tests/*.js'],
                tasks: ['default'],
                options: {
                    spawn: true,
                    interrupt: true
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-execute');

    grunt.registerTask('make-ast-files', 'execute:makeasts');

    grunt.registerTask('build', ['clean', 'make-ast-files', 'jshint']);
    grunt.registerTask('test', ['build', 'jasmine_node']);
    grunt.registerTask('default', 'test');

};