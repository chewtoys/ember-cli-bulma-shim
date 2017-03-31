# ember-cli-bulma-shim

[![npm version](https://badge.fury.io/js/ember-cli-bulma-shim.svg)](https://www.npmjs.com/package/ember-cli-bulma-shim)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-bulma-shim.svg)](http://emberobserver.com/addons/ember-cli-bulma-shim)


An [ember-cli](http://www.ember-cli.com) shim for [Bulma.io](http://bulma.io), a modern CSS framework based on Flexbox by Jeremy Thomas

## Installation

```shell
ember install ember-cli-bulma-shim
```

## Optional

An [ember-cli](http://www.ember-cli.com) addon for using [Font Awesome](https://github.com/martndemus/ember-font-awesome) icons in [Bulma.io](http://bulma.io)

```shell
ember install ember-font-awesome
```

## Add Sass Options

Specify include paths in your `ember-cli-build.js`

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
