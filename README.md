# grunt-css2js

convert a css file into DOM script to inline style object

## Example

    /* foo.css */
    .foo {
        color: red;
    }

will be converted to

    // foo.css.js
    (function () {
        var cssText = ".foo {\n" +
                      "    color:red;\n" +
                      "}";
        // some DOM script to inline style element
    }());

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-css2js`

Then add this line to your project's `grunt.js` gruntfile:

    grunt.loadNpmTasks('grunt-css2js');


[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

in grunt.js:

    grunt.initConfig({
        ...
        css2js: {
            foo: {
                src: 'src/foo.css',
                dest: 'dist/foo.css.js'
            },
            module_b: {
                src: ...,
                dest: ...
            }
        }
        ...
    });

## Release History

### 0.1.0

first release

## License
Copyright (c) 2013 Choi Seong-Rak  
Licensed under the BSD license.
