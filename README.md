grunt-oc
========
Grunt wrapper for [OpenComponents cli](https://github.com/opentable/oc)

[![linux build](https://img.shields.io/travis/opencomponents/grunt-oc/master.svg?label=linux+build)](http://travis-ci.org/opencomponents/grunt-oc)

OC cli command / grunt-oc tasks
* `oc dev` => `oc-dev` and `oc-dev-kill` tasks
* `oc init` => `oc-init` task
* `oc mock` => `oc-mock` task
* `oc preview` => `oc preview` task
* `oc publish` => `oc-publish` task
* `oc registry` => `oc-registry` task

# Config example

```js
grunt.initConfig({
  'oc-dev': {
    myFolder: {
      options: {
        dirPath: '.',
        port: 3030,
        baseUrl: 'http://localhost:3030/',
        hotReloading: false
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
    myComponent: {
      options: {
        registry: 'http://localhost:3030/',
        username: 'myuser',
        password: 'password',
        componentPath: './my-component/'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-oc');
```

# License
MIT
