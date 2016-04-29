'use strict';

var Logger = require('./support/logger'),
    Registry = require('oc/src/cli/domain/registry');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-registry', 'performs actions related to registry', function(){

    var done = this.async(),
        options = this.options({}),
        logger = new Logger(grunt);

    var dependencies = {
      registry: new Registry({ registry: options.registry }),
      logger: logger
    };

    require('oc/src/cli/facade/registry')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
