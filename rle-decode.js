"use strict";

var stream = require("stream");

/* 
* run length decoding JS
*/

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

function prettyPrint(rleData) {
    return [...rleData].join('');
}

var transformStream = new stream.Transform();
transformStream._transform = function foo(chunk, encoding, callback) {
    transformStream.push( decode(chunk.toString()) );
    callback();
};

process.stdin.pipe(transformStream).pipe(process.stdout);
