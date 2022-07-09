# rle-js - Run-length encoding

* [Run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding) & decoding in JS.

## Features
* Vanilla node - no dependencies.
* Unix-style pipe support.

## How to use it
Encoding:
```bash
$ node rle-encode.js < input.txt
```

Decoding:
```bash
$ node rle-decode.js < rle-encoded.txt
```

## Requirements
* Node v8.x
* `npm` is *not* required.

## Running tests
Run `run-tests.sh` bash script to invoke the unit tests.

They are written using my port of `jstinytest` which is bundled
inside `tests/tinytest.js`.


## Licence
LGPL v2.1 only.

See [COPYING](COPYING).

### Further reading:

* [The perils of LGPLv3](https://nikmav.blogspot.com/2013/03/the-perils-of-lgplv3.html)

* FSF [LGPL compatibility matrix](https://gplv3.fsf.org/dd3-faq#gpl-compat-matrix)

### Libraries
* Uses `jstinytest` (MIT licence) for testing.
