"use strict";

var fs = require("fs");
var filename = "foobar.txt";
var encoding = "utf8";

var debug = false;

/* run length encoding JS
*
* encoded data stored in an array with [number, string] pairs
* where the length of string is always 1
*
*/

function encode(val) {
    var result = [];
    var arr = [...val];
    var counter = 1;
    var prev = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] == prev) {
            counter++;
        }
        else {
            result.push(counter);
            result.push(prev);
            prev = arr[i];
            counter = 1;
        }
    }
    return result;
}

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

fs.readFile(filename, encoding, function callback(error, data) {

    if (error) {
        console.error(`File error: ${error}`);
        return -1;
    }

    log("Original data:\t", data);
    var rleData = encode(data);

    log("RLE encoded:")
    console.log( prettyPrint(rleData) );

    var decoded = decode(rleData);
    log("RLE decoded:");
    console.log( decoded );

    var savedBytes = data.length - rleData.length;
    log("Compression saved bytes:", savedBytes);
    if (savedBytes < 0) {
        log("Negative compression");
    }
});

function log(message) {
    if (debug) {
        console.log(message);
    }
}
