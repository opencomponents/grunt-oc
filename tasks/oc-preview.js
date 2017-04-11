'use strict';

var logger = require('oc/src/cli/logger'),
    Registry = require('oc/src/cli/domain/registry');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-preview', 'previews a component', function(){

    var done = this.async(),
        options = this.options({});

    var dependencies = {
      registry: new Registry({ registry: options.registry }),
      logger
    };

    require('oc/src/cli/facade/preview')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
