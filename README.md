grunt-oc
========

Grunt wrapper for [oc cli](https://github.com/opentable/oc)

[![linux build](https://img.shields.io/travis/opentable/oc/master.svg?label=linux+build)](http://travis-ci.org/opentable/oc)

Disclaimer: this is a WIP.

Cli commands supported:
* oc dev (via oc-dev and oc-dev-kill tasks)
* oc publish (via oc-publish task)

# Config example

```
grunt.initConfig({
  'oc-publish': {
    options: {
      registry: 'http://my.registry.com',
      username: 'myuser', // optional authentication
      password: 'password'
    },
    mycomponent: {
      options: {
        componentPath: './mycomponent/buildOutput'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-oc');
```

# License
MIT