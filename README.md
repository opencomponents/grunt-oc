grunt-oc
---

Grunt wrapper for [oc cli](https://github.com/opentable/oc)

1) Make some grunt config

```
grunt.initConfig({
  'oc-publish': {
    options: {
      registry: 'http://my.registry.com'
    },
    mycomponent: {
      componentPath: './mycomponent'
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

Todo:

- [ ] publish (waiting for opentable/oc#103 and opentable/oc#104)
- [ ] dev
