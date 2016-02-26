'use strict';

var registryInstances = require('./support/dev-registry-instances');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-dev-kill', 'kills all the oc dev registries started via grunt oc-dev', function(){

    var done = this.async(),
        instances = registryInstances.get(),
        c = instances.length;

    var next = function(){
      c--;
      if(c === 0){
        instances.flush();
        grunt.verbose.writeln('All instances killed');
        done();
      }
    };

    for(var i = 0; i < instances.length; i++){
      instances[i].close(next);
    }
  });
};
