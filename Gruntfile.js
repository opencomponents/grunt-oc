module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ]
        },
        'oc-publish': {
            options: {
                registry: 'http://localhost:3030'
            },
            mycomponent: {
                options: {
                    componentPath: '../error-page-components/error-page/'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadTasks('tasks/');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test']);
};
