'use strict';

var Local = require('oc/cli/domain/local'),
    Logger = require('./support/logger'),
    Registry = require('oc/cli/domain/registry');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-publish', 'publish a component', function(){

    var done = this.async(),
        options = this.options({}),
        logger = new Logger(grunt);

    var dependencies = {
      registry: new Registry({ registry: options.registry }),
      local: new Local({ logger: logger }),
      logger: logger
    };

    require('oc/cli/facade/publish')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
