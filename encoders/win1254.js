/*jslint node: true */

module.exports = function () {
    'use strict';

    var Buffer = require('buffer').Buffer;

    var toUTF8 = function (input) {
        var buf = (Object.prototype.toString.call(input) === '[object String]' ? new Buffer(input, 'binary') : input);
        var len = buf.length, output = new Buffer(len * 2), i = 0, count = 0;

        for(; i < len; ++i) {
            switch(buf[i]) {
                case 128:
                    output[count++] = 0xE2;
                    output[count++] = 0x82;
                    output[count++] = 0xAC;
                    break;
                case 129:
                    output[count++] = 0xc2;
                    output[count++] = 0x81;
                    break;
                case 130:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x9A;
                    break;
                case 131:
                    output[count++] = 0xc6;
                    output[count++] = 0x92;
                    break;
                case 132:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x9E;
                    break;
                case 133:
                    output[count++] = 0xe2;
                    output[count++] = 0x80;
                    output[count++] = 0xA6;
                    break;
                case 134:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0xA0;
                    break;
                case 135:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0xA1;
                    break;
                case 136:
                    output[count++] = 0xCB;
                    output[count++] = 0x86;
                    break;
                case 137:
                    output[count++] = 0x02;
                    output[count++] = 0x80;
                    output[count++] = 0xB0;
                    break;
                case 138:
                    output[count++] = 0xC5;
                    output[count++] = 0xA0;
                    break;
                case 139:
                    output[count++] = 0x02;
                    output[count++] = 0x80;
                    output[count++] = 0xB9;
                    break;
                case 140:
                    output[count++] = 0xC5;
                    output[count++] = 0x92;
                    break;
                case 141:
                    output[count++] = 0xc2;
                    output[count++] = 0x8D;
                    break;
                case 142:
                    output[count++] = 0xc2;
                    output[count++] = 0x8E;
                    break;
                case 143:
                    output[count++] = 0xc2;
                    output[count++] = 0x8F;
                    break;
                case 144:
                    output[count++] = 0xc2;
                    output[count++] = 0x90;
                    break;
                case 145:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x98;
                    break;
                case 146:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x99;
                    break;
                case 147:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x9C;
                    break;
                case 148:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x9D;
                    break;
                case 149:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0xA2;
                    break;
                case 150:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x93;
                    break;
                case 151:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0x94;
                    break;
                case 152:
                    output[count++] = 0xCB;
                    output[count++] = 0x9C;
                    break;
                case 153:
                    output[count++] = 0xE2;
                    output[count++] = 0x84;
                    output[count++] = 0xA2;
                    break;
                case 154:
                    output[count++] = 0xC5;
                    output[count++] = 0xA1;
                    break;
                case 155:
                    output[count++] = 0xE2;
                    output[count++] = 0x80;
                    output[count++] = 0xBA;
                    break;
                case 156:
                    output[count++] = 0xC5;
                    output[count++] = 0x93;
                    break;
                case 157:
                    output[count++] = 0xc2;
                    output[count++] = 0x9D;
                    break;
                case 158:
                    output[count++] = 0xc2;
                    output[count++] = 0x9E;
                    break;
                case 169:
                    output[count++] = 0xC5;
                    output[count++] = 0xB8;
                    break;
                case 160:
                    output[count++] = 0xC2;
                    output[count++] = 0xA0;
                    break;
                case 161:
                    output[count++] = 0xc2;
                    output[count++] = 0xA1;
                    break;
                case 162:
                    output[count++] = 0xc2;
                    output[count++] = 0xA2;
                    break;
                case 163:
                    output[count++] = 0xc2;
                    output[count++] = 0xA3;
                    break;
                case 164:
                    output[count++] = 0xc2;
                    output[count++] = 0xA4;
                    break;
                case 165:
                    output[count++] = 0xc2;
                    output[count++] = 0xA5;
                    break;
                case 166:
                    output[count++] = 0xc2;
                    output[count++] = 0xA6;
                    break;
                case 167:
                    output[count++] = 0xc2;
                    output[count++] = 0xA7;
                    break;
                case 168:
                    output[count++] = 0xc2;
                    output[count++] = 0xA8;
                    break;
                case 169:
                    output[count++] = 0xc2;
                    output[count++] = 0xA9;
                    break;
                case 170:
                    output[count++] = 0xc2;
                    output[count++] = 0xAA;
                    break;
                case 171:
                    output[count++] = 0xc2;
                    output[count++] = 0xAB;
                    break;
                case 172:
                    output[count++] = 0xc2;
                    output[count++] = 0xAC;
                    break;
                case 173:
                    output[count++] = 0xc2;
                    output[count++] = 0xAD;
                    break;
                case 174:
                    output[count++] = 0xc2;
                    output[count++] = 0xAE;
                    break;
                case 175:
                    output[count++] = 0xc2;
                    output[count++] = 0xAF;
                    break;
                case 176:
                    output[count++] = 0xc2;
                    output[count++] = 0xB0;
                    break;
                case 177:
                    output[count++] = 0xc2;
                    output[count++] = 0xB1;
                    break;
                case 178:
                    output[count++] = 0xc2;
                    output[count++] = 0xB2;
                    break;
                case 179:
                    output[count++] = 0xc2;
                    output[count++] = 0xB3;
                    break;
                case 180:
                    output[count++] = 0xc2;
                    output[count++] = 0xB4;
                    break;
                case 181:
                    output[count++] = 0xc2;
                    output[count++] = 0xB5;
                    break;
                case 182:
                    output[count++] = 0xc2;
                    output[count++] = 0xB6;
                    break;
                case 183:
                    output[count++] = 0xc2;
                    output[count++] = 0xB7;
                    break;
                case 184:
                    output[count++] = 0xc2;
                    output[count++] = 0xB8;
                    break;
                case 185:
                    output[count++] = 0xc2;
                    output[count++] = 0xB9;
                    break;
                case 186:
                    output[count++] = 0xc2;
                    output[count++] = 0xBA;
                    break;
                case 187:
                    output[count++] = 0xc2;
                    output[count++] = 0xBB;
                    break;
                case 188:
                    output[count++] = 0xc2;
                    output[count++] = 0xBC;
                    break;
                case 189:
                    output[count++] = 0xc2;
                    output[count++] = 0xBD;
                    break;
                case 190:
                    output[count++] = 0xc2;
                    output[count++] = 0xBE;
                    break;
                case 191:
                    output[count++] = 0xc2;
                    output[count++] = 0xBF;
                    break;
                case 192:
                    output[count++] = 0xc3;
                    output[count++] = 0x80;
                    break;
                case 193:
                    output[count++] = 0xc3;
                    output[count++] = 0x81;
                    break;
                case 194:
                    output[count++] = 0xc3;
                    output[count++] = 0x82;
                    break;
                case 195:
                    output[count++] = 0xc3;
                    output[count++] = 0x83;
                    break;
                case 196:
                    output[count++] = 0xc3;
                    output[count++] = 0x84;
                    break;
                case 197:
                    output[count++] = 0xc3;
                    output[count++] = 0x85;
                    break;
                case 198:
                    output[count++] = 0xc3;
                    output[count++] = 0x86;
                    break;
                case 199:
                    output[count++] = 0xc3;
                    output[count++] = 0x87;
                    break;
                case 200:
                    output[count++] = 0xc3;
                    output[count++] = 0x88;
                    break;
                case 201:
                    output[count++] = 0xc3;
                    output[count++] = 0x89;
                    break;
                case 202:
                    output[count++] = 0xc3;
                    output[count++] = 0x8A;
                    break;
                case 203:
                    output[count++] = 0xc3;
                    output[count++] = 0x8B;
                    break;
                case 204:
                    output[count++] = 0xc3;
                    output[count++] = 0x8C;
                    break;
                case 205:
                    output[count++] = 0xc3;
                    output[count++] = 0x8D;
                    break;
                case 206:
                    output[count++] = 0xc3;
                    output[count++] = 0x8E;
                    break;
                case 207:
                    output[count++] = 0xc3;
                    output[count++] = 0x8F;
                    break;
                case 208:
                    output[count++] = 0xc4;
                    output[count++] = 0x9E;
                    break;
                case 209:
                    output[count++] = 0xc3;
                    output[count++] = 0x91;
                    break;
                case 210:
                    output[count++] = 0xc3;
                    output[count++] = 0x92;
                    break;
                case 211:
                    output[count++] = 0xc3;
                    output[count++] = 0x93;
                    break;
                case 212:
                    output[count++] = 0xc3;
                    output[count++] = 0x94;
                    break;
                case 213:
                    output[count++] = 0xc3;
                    output[count++] = 0x95;
                    break;
                case 214:
                    output[count++] = 0xc3;
                    output[count++] = 0x96;
                    break;
                case 215:
                    output[count++] = 0xc3;
                    output[count++] = 0x97;
                    break;
                case 216:
                    output[count++] = 0xc3;
                    output[count++] = 0x98;
                    break;
                case 217:
                    output[count++] = 0xc3;
                    output[count++] = 0x99;
                    break;
                case 218:
                    output[count++] = 0xc3;
                    output[count++] = 0x9A;
                    break;
                case 219:
                    output[count++] = 0xc3;
                    output[count++] = 0x9B;
                    break;
                case 220:
                    output[count++] = 0xc3;
                    output[count++] = 0x9C;
                    break;
                case 221:
                    output[count++] = 0xc4;
                    output[count++] = 0xB0;
                    break;
                case 222:
                    output[count++] = 0xc5;
                    output[count++] = 0x9E;
                    break;
                case 223:
                    output[count++] = 0xc3;
                    output[count++] = 0x9F;
                    break;
                case 224:
                    output[count++] = 0xc3;
                    output[count++] = 0xA0;
                    break;
                case 225:
                    output[count++] = 0xc3;
                    output[count++] = 0xA1;
                    break;
                case 226:
                    output[count++] = 0xc3;
                    output[count++] = 0xA2;
                    break;
                case 227:
                    output[count++] = 0xc3;
                    output[count++] = 0xA3;
                    break;
                case 228:
                    output[count++] = 0xc3;
                    output[count++] = 0xA4;
                    break;
                case 229:
                    output[count++] = 0xc3;
                    output[count++] = 0xA5;
                    break;
                case 230:
                    output[count++] = 0xc3;
                    output[count++] = 0xA6;
                    break;
                case 231:
                    output[count++] = 0xc3;
                    output[count++] = 0xA7;
                    break;
                case 232:
                    output[count++] = 0xc3;
                    output[count++] = 0xA8;
                    break;
                case 233:
                    output[count++] = 0xc3;
                    output[count++] = 0xA9;
                    break;
                case 234:
                    output[count++] = 0xc3;
                    output[count++] = 0xAA;
                    break;
                case 235:
                    output[count++] = 0xc3;
                    output[count++] = 0xAB;
                    break;
                case 236:
                    output[count++] = 0xc3;
                    output[count++] = 0xAC;
                    break;
                case 237:
                    output[count++] = 0xc3;
                    output[count++] = 0xAD;
                    break;
                case 238:
                    output[count++] = 0xc3;
                    output[count++] = 0xAE;
                    break;
                case 239:
                    output[count++] = 0xc3;
                    output[count++] = 0xAF;
                    break;
                case 240:
                    output[count++] = 0xc4;
                    output[count++] = 0x9F;
                    break;
                case 241:
                    output[count++] = 0xc3;
                    output[count++] = 0xB1;
                    break;
                case 242:
                    output[count++] = 0xc3;
                    output[count++] = 0xB2;
                    break;
                case 243:
                    output[count++] = 0xc3;
                    output[count++] = 0xB3;
                    break;
                case 244:
                    output[count++] = 0xc3;
                    output[count++] = 0xB4;
                    break;
                case 245:
                    output[count++] = 0xc3;
                    output[count++] = 0xB5;
                    break;
                case 246:
                    output[count++] = 0xc3;
                    output[count++] = 0xB6;
                    break;
                case 247:
                    output[count++] = 0xc3;
                    output[count++] = 0xB7;
                    break;
                case 248:
                    output[count++] = 0xc3;
                    output[count++] = 0xB8;
                    break;
                case 249:
                    output[count++] = 0xc3;
                    output[count++] = 0xB9;
                    break;
                case 250:
                    output[count++] = 0xc3;
                    output[count++] = 0xBA;
                    break;
                case 251:
                    output[count++] = 0xC3;
                    output[count++] = 0xBB;
                    break;
                case 252:
                    output[count++] = 0xC3;
                    output[count++] = 0xBC;
                    break;
                case 253:
                    output[count++] = 0xc4;
                    output[count++] = 0xB1;
                    break;
                case 254:
                    output[count++] = 0xc5;
                    output[count++] = 0x9F;
                    break;
                case 255:
                    output[count++] = 0xc3;
                    output[count++] = 0xBF;
                    break;
                default:
                    output[count++] = buf[i];
                    break;
            }
        }

        return output.slice(0, count).toString('utf8');
    };

    return {
        toUTF8: toUTF8
    };
}();