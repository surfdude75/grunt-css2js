/*jshint node: true*/

/*
 * grunt-css2
 * https://github.com/ragiragi/grunt-css2js
 *
 * Copyright (c) 2013 Choi Seong-Rak
 * Licensed under the BSD license.
 */

var fs = require('fs');

module.exports = function (grunt) {
    'use strict';

    grunt.registerMultiTask('css2js', 'Convert CSS to JS.', function () {

        var src = grunt.file.expandFiles(this.data.src).toString(),
            dest = this.data.dest;

        grunt.log.writeln("Converting: '" + src + "' to JavaScript");

        var css = fs.readFileSync(src).toString();
        if (!css) {
            grunt.log.writeln("Failed to read file");
            return false;
        }

        var cssStrings = css.split("\n").map(function (l) {
            return '"' + l + '\\n"';
        }).join(" + \n");

        var js = '(function () {' +
            '    var cssText = ' + cssStrings + ',' +
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

        grunt.log.writeln("Saved: '" + src + "' as '" + dest + "'");
        fs.writeFileSync(dest, js);

        return true;
    });

};
