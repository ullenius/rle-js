"use strict";

var {
    fail, assert, assertEquals, assertStrictEquals, tests
} = require("./tinytest.js");

var encode = require("../rle-encode.js");

var setup = function beforeAll() {
    process.stdin.unref(); // don't wait for stdin stream
}();

tests({
    "short line encoding" : function test() {
        var input = "AAABBBAAA";
        var expected = "3A3B3A";
        var actual = encode(input);

        assertEquals(expected, actual);
    },
    "encode 10 repeated characters" : function test() {
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
    }


});

