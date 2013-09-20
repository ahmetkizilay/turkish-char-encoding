/*jslint node: true */

var Encoder = function (encoding) {
    'use strict';

    var lowerEncoding = encoding.toLowerCase();
    if(lowerEncoding === 'win-1254') {
        return require('./encoders/win1254');
    } else if(lowerEncoding === 'iso-8859-9') {
        return require('./encoders/iso9');
    } else if(lowerEncoding === 'iso-8859-1') {
        return require('./encoders/iso1');
    } else {
        throw {msg: 'encoding not supported: ' + encoding};
    }
};

module.exports = Encoder;