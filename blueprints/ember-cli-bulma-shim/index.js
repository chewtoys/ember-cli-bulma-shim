/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-cli-bulma-shim',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addPackagesToProject(
      [
        { name: 'ember-cli-sass', target: '^6.1.2' }
      ]
    ).then(() => {
      return this.addBowerPackagesToProject(
        [
          { name: 'bulma', target: '^0.4.0' }
        ]
      );
    });
  },

  isDevelopingAddon: function() {
    return false;
  }
};
