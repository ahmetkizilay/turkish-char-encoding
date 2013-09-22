# turkish-char-encoding

this is a simple tool for NodeJS to convert ISO-8859-9 and Windows-1254 encoded Strings and Buffers into UTF-8 strings.

### Installation
```sh
npm install turkish-char-encoding
```

### Usage
```
var encoder = require('turkish-char-encoding');

// for win-1254
var str = encoder('win-1254').toUTF8('ÖöÇçŞşİıĞğÜü'); // your win-1254 text/buffer
// for iso-8859-9
var str = encoder('iso-8859-9').toUTF8('ÖöÇçŞşİıĞğÜü'); // your iso-8859-9 text/buffer
etc...
```