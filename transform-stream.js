"use strict";

var stream = require("stream");

// encode/decode-function passed in
// strategy pattern, GoF
function create( func ) {
    var transformStream = new stream.Transform();
    transformStream._transform = function transform(chunk, encoding, callback) {
        transformStream.push( func(chunk.toString()) );
        callback();
    };
    return transformStream;
}

module.exports = { create };
