# ember-cli-bulma-shim

[![npm version](https://badge.fury.io/js/ember-cli-bulma-shim.svg)](https://www.npmjs.com/package/ember-cli-bulma-shim)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-bulma-shim.svg)](http://emberobserver.com/addons/ember-cli-bulma-shim)

## Installation

```shell
ember install ember-cli-bulma-shim
```

## Add Sass Options

Specify include paths in your `ember-cli-build.js`:

```javascript
module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'bower_components/bulma'
      ]
    }
  });
```
