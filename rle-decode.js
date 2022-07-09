"use strict";

var transformStream= require("./transform-stream.js");

/*
* run length decoding JS
*/
module.exports = decode;

function decode(data) {
    var result = "";
    for (var i = 0; i < data.length - 1; i++) {
        var n = data[i];
        var letter = data[i + 1];
        result += letter.repeat(n); // coercion to number
        i++;
    }
    return result;
}

process.stdin.pipe(transformStream).pipe(process.stdout);
