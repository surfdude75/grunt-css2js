/*jshint node: true */
var grunt = require('grunt');

(function () {
    'use strict';

    /*
     ======== A Handy Little Nodeunit Reference ========
     https://github.com/caolan/nodeunit

     Test methods:
     test.expect(numAssertions)
     test.done()
     Test assertions:
     test.ok(value, [message])
     test.equal(actual, expected, [message])
     test.notEqual(actual, expected, [message])
     test.deepEqual(actual, expected, [message])
     test.notDeepEqual(actual, expected, [message])
     test.strictEqual(actual, expected, [message])
     test.notStrictEqual(actual, expected, [message])
     test.throws(block, [error], [message])
     test.doesNotThrow(block, [error], [message])
     test.ifError(value)
     */

    var css2js = require('../tasks/css2js.js');

    exports['css2js'] = {
        'single CSS statement should not be ends with line feed': function (test) {
            test.expect(1);
            var css = ".class { font-size: 34pt; }";
            test.equals('".class { font-size: 34pt; }"', css2js.convertInJSString(css));
            test.done();
        },

        'multi line css': function (test) {
            test.expect(1);
            var css = ".class { font-size: 34pt; }\n#id { color: #f00; }\ndiv{border: solid 1px red}";
            test.equals(
                '".class { font-size: 34pt; }\\n" + \n' +
                    '"#id { color: #f00; }\\n" + \n' +
                    '"div{border: solid 1px red}"', css2js.convertInJSString(css));
            test.done();
        },

        'should escape double qoute character properly': function (test) {
            test.expect(1);
            var css = 'body { font-family: "Arial" }';
            test.equals(
                '"body { font-family: \\"Arial\\" }"', css2js.convertInJSString(css));
            test.done();
        },

        'should escape unicode encoded character': function (test) {
            test.expect(1);
            var css = 'div:after { content: "\\2713" }';
            test.equals(
                '"div:after { content: \\"\\\\2713\\" }"', css2js.convertInJSString(css));
            test.done();
        }
    };

}());
