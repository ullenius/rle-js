"use strict";

var {
    fail, assert, assertEquals, assertStrictEquals, tests
} = require("./tinytest.js");

var encode = require("../rle-encode.js");

var setup = function beforeAll() {
    process.stdin.unref(); // don't wait for stdin stream
}();

tests({
    "short line encoding" : function shortLine() {
        var input = "AAABBBAAA";
        var expected = "3A3B3A";

        var actual = encode(input);
        assertEquals(expected, actual);
    },
    "encode 10 repeated characters" : function longEncoding() {
        var input = "A".repeat(10);
        var expected = "9A1A";

        var actual = encode(input);
        assertEquals(expected, actual);
    },
    "multiline encoding" : function multiline() {
        var text = "ABBA\nBBB\nAAA";
        var expected = "1A2B1A1\n3B1\n3A";

        var actual = encode(text);
        assertEquals(expected, actual);
    },
    "super long text" : function superLong() {
        var text = "A".repeat(100);
        var expected = "9A".repeat(11) + "1A";

        var actual = encode(text);
        assertEquals(expected, actual);
    }

});
