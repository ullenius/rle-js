"use strict";

var stream = require("stream");

var transformStream = new stream.Transform();
transformStream._transform = function transform(chunk, encoding, callback) {
    transformStream.push( encode(chunk.toString()) );
    callback();
};

module.exports = transformStream;
