"use strict";

var {
    fail, assert, assertEquals, assertStrictEquals, tests
} = require("./tinytest.js");

var decode = require("../rle-decode.js");

var setup = function beforeAll() {
    process.stdin.unref(); // don't wait for stdin stream
}();

tests({
    "short line decoding" : function shortLine() {
        var input = "3A3B3A";
        var expected = "AAABBBAAA";

        var actual = decode(input);
        assertEquals(expected, actual);
    },
    "decode 10 repeated characters" : function longEncoding() {
        var input = "9A1A";
        var expected = "A".repeat(10);

        var actual = decode(input);
        assertEquals(expected, actual);
    },
    "multiline decoding" : function multiline() {
        var input = "1A2B1A1\n3B1\n3A";
        var expected = "ABBA\nBBB\nAAA";

        var actual = decode(input);
        assertEquals(expected, actual);
    },
    "super long text decoding" : function superLong() {
        var input = "9A".repeat(11) + "1A";
        var expected = "A".repeat(100);

        var actual = decode(input);
        assertEquals(expected, actual);
    }

});
