'use strict';

var Local = require('oc/src/cli/domain/local'),
    logger = require('oc/src/cli/logger'),
    registryInstances = require('./support/dev-registry-instances');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-dev', 'starts a oc dev registry', function(){

    var done = this.async(),
        options = this.options({});

    var dependencies = {
      local: new Local(),
      logger
    };

    require('oc/src/cli/facade/dev')(dependencies)(options, function(err, registry){
      if(err){
        grunt.fatal(err);
      } else {
        registryInstances.add(registry);
      }
      
      done();
    });
  });
};
