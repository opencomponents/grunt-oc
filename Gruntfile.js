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
      myFolder: {
        options: {
          dirName: '.',
          port: 3030,
          baseUrl: 'http://localhost:3030/'
        }
      }
    },
    'oc-dev-kill': {
      allInstances: {
        options: {}
      }
    },
    'oc-init': {
      newComponent: {
        options: {
          componentName: 'newComponent',
          templateType: 'jade'
        }
      }
    },
    'oc-mock': {
      getToggle: {
        options: {
          targetType: 'plugin',
          targetName: 'hello',
          targetValue: 'world'
        }
      }
    },
    'oc-preview': {
      myComponent: {
        options: {
          componentHref: 'https://components.com/my-component'
        }
      }
    },
    'oc-publish': {
      mycomponent: {
        options: {
          registry: 'http://localhost:3030/',
          username: 'myuser',
          password: 'password',
          componentPath: './my-component/'
        }
      }
    },
    'oc-registry': {
      list: {
        options: {
          command: 'ls'
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
