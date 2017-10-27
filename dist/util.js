"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const stringToLongformHex = (color) => constants_1.colors[color].length === 4 ? color + color.slice(1, 2) + color.slice(1, 2) + color.slice(1, 2) : constants_1.colors[color];
const shortToLongformHex = (hex) => hex.length === 4 ? hex + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(1, 2) : hex;
exports.rgb = (hex) => {
    hex = shortToLongformHex(hex);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
exports.a = (rgb, a) => {
    if (rgb === null)
        throw new Error('a must be passed and object of type rgbObj');
    return `${rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + a}`;
};
// shade requires a color string, accepts only the strings found in constants.colors
// percent is a float 0 - 1.
// higher percent = darker output
exports.shade = (color, percent) => {
    if (!constants_1.colors[color])
        throw new Error('must be a name string found in /constants, can not be a hex value');
    const hex = stringToLongformHex(color);
    const f = parseInt(hex.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};
exports.px = (value) => {
    if (!value || value === 'small')
        return '2rem';
    return value === 'medium' ? '4rem' : '8rem';
};
exports.getProp = (props, prop, def) => props.prop ? props.prop : def;
