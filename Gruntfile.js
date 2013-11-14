module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        scriptFiles: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js'],
        nodeunit: {
            all: ['test/**/*.js']
        },
        watch: {
            scripts: {
                files: ['<%= scriptFiles %>'],
                tasks: 'default',
                options: {
                    debounceDelay: 250
                }
            }
        },
        jshint: {
            options: {
                "curly": true,
                "eqeqeq": true,
                "immed": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "sub": true,
                "undef": true,
                "boss": true,
                "eqnull": true,
                "node": true,
                "globals": {}
            },
            all: ['<%= scriptFiles %>']
        },
        css2js: {
            onesrc_test: {
                src: 'sample/one.css',
                dest: 'sample/dist/onesrc_test_css2js.js'
            },
            multisrc_test: {
                src: ['sample/one.css', 'sample/two.css'],
                dest: 'sample/dist/multisrc_test_css2js.js'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load css2js task
    grunt.loadTasks('tasks');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);

};
