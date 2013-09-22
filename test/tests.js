var should = require('should'),
    assert = require('assert'),
    fs = require('fs'),
    encoder = require('../index');

describe('Just Testing', function () {
    var utf8Buffer;

    before(function (done) {
        fs.stat("./test/turkish_utf8.txt", function (err, stats) {
            if(err) {
                throw err;
            }

            utf8Buffer = new Buffer(stats.size);

            fs.open('./test/turkish_utf8.txt', 'r', function (err, fd) {
                if(err) {
                    throw err;
                }

                fs.read(fd, utf8Buffer, 0, stats.size, 0, function (err, num) {
                    if(err) {
                        throw err;
                    }

                    done();
                });
            });
        });
    });

    after(function (done) {
        done();
    });

    it('should convert ISO-8859-9 Turkish characters to UTF-8', function (done) {
        fs.stat("./test/turkish_iso9.txt", function (err, stats) {
            if(err) {
                throw err;
            }

            var iso9Buffer = new Buffer(stats.size);

            fs.open('./test/turkish_iso9.txt', 'r', function (err, fd) {
                if(err) {
                    throw err;
                }

                fs.read(fd, iso9Buffer, 0, stats.size, 0, function (err, num) {
                    if(err) {
                        throw err;
                    }

                    var convertedStr = encoder('iso-8859-9').toUTF8(iso9Buffer);

                    convertedStr.should.eql(utf8Buffer.toString('utf-8'));

                    done();
                });
            });
        });
    });

    it('should convert Win-1254 Turkish characters to UTF-8', function (done) {
        fs.stat("./test/turkish_win1254.txt", function (err, stats) {
            if(err) {
                throw err;
            }

            var win1254Buffer = new Buffer(stats.size);

            fs.open('./test/turkish_win1254.txt', 'r', function (err, fd) {
                if(err) {
                    throw err;
                }

                fs.read(fd, win1254Buffer, 0, stats.size, 0, function (err, num) {
                    if(err) {
                        throw err;
                    }

                    var convertedStr = encoder('win-1254').toUTF8(win1254Buffer);

                    convertedStr.should.eql(utf8Buffer.toString('utf-8'));

                    done();
                });
            });
        });
    });

    it('should throw error for incompatible encoding values', function (done) {
        
        (function () {
            encoder('lalalla').toUTF8('random');
        }).should.throw();

        done();
    });

    // OK, here I am assuming the file is encoded in UTF-8
    // this is an incomplete test anyway...
    it('should also work for non-turkish standart characters', function (done) {
        var testWord = "qwertyasdfghzxcvbn", testBuffer = new Buffer(testWord, 'utf-8');
        encoder('win-1254').toUTF8(testBuffer).should.eql(testBuffer.toString());

        done();
    });
});