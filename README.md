grunt-oc
========

Grunt wrapper for [OpenComponents cli](https://github.com/opentable/oc)

[![linux build](https://img.shields.io/travis/opentable/oc/master.svg?label=linux+build)](http://travis-ci.org/opentable/oc)

OC cli command / grunt-oc tasks
* `oc dev` => `oc-dev` and `oc-dev-kill` tasks
* `oc init` => `oc-init` task
* `oc mock` => `oc-mock` task
* `oc preview` => `oc preview` task
* `oc publish` => `oc-publish` task
* `oc registry` => `oc-registry` task

# Config example

```
grunt.initConfig({
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

grunt.loadNpmTasks('grunt-oc');
```

# License
MIT