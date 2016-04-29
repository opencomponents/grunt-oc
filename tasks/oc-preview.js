'use strict';

var Logger = require('./support/logger'),
    Registry = require('oc/src/cli/domain/registry');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-preview', 'previews a component', function(){

    var done = this.async(),
        options = this.options({}),
        logger = new Logger(grunt);

    var dependencies = {
      registry: new Registry({ registry: options.registry }),
      logger: logger
    };

    require('oc/src/cli/facade/preview')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
