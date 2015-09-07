module.exports = function(grunt){
    var Registry = require('oc/cli/domain/registry');
    var Local = require('oc/cli/domain/local');

    grunt.registerMultiTask('oc-publish', 'publish a component', function(){
        var done = this.async();
        var options = this.options({});

        var dependencies = {
            registry: new Registry({
                registry: options.registry
            }),
            local: new Local(),
            logger: {
                log: grunt.verbose.writeln,
                logNoNewLine: function(msg){
                  return grunt.verbose.write(msg.toString());
                }
            }
        };

        var publish = require('oc/cli/facade/publish')(dependencies);

        publish({
            componentPath: options.componentPath
        }, done);
    });
};
