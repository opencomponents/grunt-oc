'use strict';

var instances = [];

module.exports = {
  add: function(instance){
    instances.push(instance);
  },
  flush: function(){
    instances = [];
  },
  get: function(){
    return instances;
  }
};