grunt-oc
---

Grunt wrapper for [oc cli](https://github.com/opentable/oc)

Intended for cases where you might have a more complex build pipeline than just `oc publish`.

1) Make some grunt config

```
grunt.initConfig({
  'oc-publish': {
    options: {
      registry: 'http://my.registry.com'
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

2) Run it

```
grunt oc-publish -v
```

3) ?

4) Profit
