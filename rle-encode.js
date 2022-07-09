"use strict";

var fs = require("fs");
var stream = require("stream");
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

var transformStream = new stream.Transform();
transformStream._transform = function transform(chunk, encoding, callback) {
    transformStream.push( encode(chunk.toString()) );
    callback();
};

process.stdin.pipe(transformStream).pipe(process.stdout);
