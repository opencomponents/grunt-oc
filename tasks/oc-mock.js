'use strict';

var Local = require('oc/src/cli/domain/local'),
    logger = require('oc/src/cli/logger');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-mock', 'creates a mock', function(){

    var done = this.async(),
        options = this.options({});

    var dependencies = {
      local: new Local(),
      logger
    };

    require('oc/src/cli/facade/mock')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
