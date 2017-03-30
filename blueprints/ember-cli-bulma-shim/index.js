/* eslint-env node */
module.exports = {
  description: 'Installation blueprint for ember-cli-bulma-shim'
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addBowerPackageToProject('bulma', '^0.4.0').then(function() {
      return this.addAddonsToProject({
        packages: [{
          name: 'ember-cli-sass',
          target: '^6.1.2'
        }]
      });
    }.bind(this));
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
