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

        var src = grunt.file.expandFiles(this.data.src),
            dest = this.data.dest,
            css = grunt.file.read(src),
            cssInJavascriptString = convertInJSString(css);

        grunt.file.write(dest, '(function () {' +
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
            '}());');
        grunt.log.writeln('File "' + dest + '" created.');
        return true;
    });

    function convertInJSString(css) {
        return css.split("\n").map(function (l) {
            return '"' + l + '\\n"';
        }).join(" + \n");
    }

};
