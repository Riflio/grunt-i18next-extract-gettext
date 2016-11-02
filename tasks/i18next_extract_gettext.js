/*
 * grunt-i18next-extract-gettext
 * https://github.com/pavelk/grunt-i18next-extract-gettext
 *
 * Copyright (c) 2016 PavelK
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('i18next_extract_gettext', 'Extracting a gettext POT file from multiple JS source files using i18next', function() {

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(''));


      var parseOptions = {
        attr: {
          list: ['data-i18n']
        },
        func: {
          list: ['i18next.t', 'i18n.t', 't']
        }
      };

      var Parser = new require('i18next-scanner').Parser;

      var parser = new Parser(parseOptions);
      parser.parseFuncFromString(src, parseOptions);
      parser.parseAttrFromString(src, parseOptions);
      var json = parser.get().en.translation;


      var converter = require('i18next-conv');
      converter.i18nextToPot('en', JSON.stringify(json), {quiet: true}).then(function (data) {
        grunt.log.writeln('File "' + f.dest + '" created.');
        grunt.file.write(f.dest, data);
      });
      
    });
  });

};
