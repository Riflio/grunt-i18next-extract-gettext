# grunt-i18next-extract-gettext

> extracting a gettext POT file from multiple JS source files using i18next

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-i18next-extract-gettext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-i18next-extract-gettext');
```

## The "i18next_extract_gettext" task

### Usage Examples
In this example, the default options are used to do something with whatever.

```js
grunt.initConfig({
  i18next_extract_gettext: {
    default_options: {
      files: {
        'dest/template.pot': ['src/file.html', 'src/file.js'],
      },
    },
  },
});
```

## Release History
03.11.16 First work version
