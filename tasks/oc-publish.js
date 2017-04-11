'use strict';

var Local = require('oc/src/cli/domain/local'),
    logger = require('oc/src/cli/logger'),
    Registry = require('oc/src/cli/domain/registry');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-publish', 'publish a component', function(){

    var done = this.async(),
        options = this.options({});

    var dependencies = {
      registry: new Registry({ registry: options.registry }),
      local: new Local(),
      logger
    };

    require('oc/src/cli/facade/publish')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
