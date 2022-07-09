#!/bin/bash
echo --Running encoding unit tests--
node tests/encode.test.js
echo --Running decoding unit tests--
node tests/decode.test.js
