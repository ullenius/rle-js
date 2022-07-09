"use strict";

var fs = require("fs");
var transformStream = require("./transform-stream.js");

var MAX = 9;

/* run length encoding JS
*
* encoded data stored in an array with [number, string] pairs
* where the length of string is always 1 digit
*
*/
module.exports = encode;

function encode(val) {
    var result = [];
    var arr = [...val];
    var counter = 1;
    var prev = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] == prev && counter < MAX) {
            counter++;
        }
        else {
            result.push(counter);
            result.push(prev);
            prev = arr[i];
            counter = 1;
        }
    }
    return prettyPrint(result);
}

function prettyPrint(rleData) {
    return [...rleData].join("");
}

var transform = transformStream.create( encode );
process.stdin.pipe(transform).pipe(process.stdout);
