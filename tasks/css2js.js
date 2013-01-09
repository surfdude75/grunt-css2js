/*jshint node: true*/

/*
 * grunt-css2
 * https://github.com/ragiragi/grunt-css2js
 *
 * Copyright (c) 2013 Choi Seong-Rak
 * Licensed under the BSD license.
 */

module.exports = function (grunt) {
    'use strict';

    grunt.registerMultiTask('css2js', 'Convert a CSS File to JS DOM Script.', function () {

        var src = grunt.file.expandFiles(this.data.src).toString(),
            dest = this.data.dest;

        var css = grunt.file.read(src);

        var cssInJavascriptString = css.split("\n").map(function (l) {
            return '"' + l + '\\n"';
        }).join(" + \n");

        var cssInlineScript = '(function () {' +
            '    var cssText = ' + cssInJavascriptString + ',' +
            '        styleEl = document.createElement("style");' +
            '    document.getElementsByTagName("head")[0].appendChild(styleEl);' +
            '    if (styleEl.styleSheet) {' +
            '        if (!styleEl.styleSheet.disabled) {' +
            '            styleEl.styleSheet.cssText = cssText;' +
            '        }' +
            '    } else {' +
            '        try {' +
            '            styleEl.innerHTML = cssText' +
            '        } catch(e) {' +
            '            styleEl.innerText = cssText;' +
            '        }' +
            '    }' +
            '}());';

        grunt.log.writeln('File "' + dest + '" created.');
        grunt.file.write(dest, cssInlineScript);
        return true;
    });

};
