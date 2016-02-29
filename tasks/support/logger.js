'use strict';

module.exports = function(grunt){
  return {
    log: grunt.verbose.writeln,
    logNoNewLine: function(msg){
      return grunt.verbose.write(msg.toString());
    }
  };
};