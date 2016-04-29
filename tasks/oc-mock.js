'use strict';

var Local = require('oc/src/cli/domain/local'),
    Logger = require('./support/logger');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-mock', 'creates a mock', function(){

    var done = this.async(),
        options = this.options({}),
        logger = new Logger(grunt);

    var dependencies = {
      local: new Local({ logger: logger }),
      logger: logger
    };

    require('oc/src/cli/facade/mock')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
