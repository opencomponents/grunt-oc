'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['node_modules']
      },
      all: ['.']
    },
    'oc-dev': {
      options: {
        dirName: '.',
        port: 3030,
        baseUrl: 'http://localhost:3030/'
      },
      myFolder: {
        options: {}
      }
    },
    'oc-dev-kill': {
      options: {},
      all: {
        options: {}
      }
    },
    'oc-publish': {
      options: {
        registry: 'http://localhost:3030/',
        username: 'myuser',
        password: 'password'
      },
      mycomponent: {
        options: {
          componentPath: './my-component/'
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
