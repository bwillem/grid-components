import { colors } from './constants';

const stringToLongformHex = (color: string) => colors[color].length === 4 ? color + color.slice(1,2) + color.slice(1,2) + color.slice(1,2) : colors[color];

const shortToLongformHex = (hex: string) => hex.length === 4 ? hex + hex.slice(1,2) + hex.slice(1,2) + hex.slice(1,2) : hex;

export const rgb = (hex: string): rgbObj | null => {
    hex = shortToLongformHex(hex);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

type rgbObj = {
    r: number;
    g: number;
    b: number;
} | null;
export const a = (rgb: rgbObj, a: Number) => {
    if (rgb === null) throw new Error('a must be passed and object of type rgbObj');
    return `${rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + a}`;
}

// shade requires a color string, accepts only the strings found in constants.colors
// percent is a float 0 - 1.
// higher percent = darker output
export const shade = (color: string, percent: Number) => {
    if (!colors[color]) throw new Error('must be a name string found in /constants, can not be a hex value');
    const hex: string = stringToLongformHex(color);
    const f = parseInt(hex.slice(1),16),
        t: any = percent<0?0:255,
        p: any = percent<0?percent as any*-1:percent,
        R=f>>16,
        G=f>>8&0x00FF,
        B: any = f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

export type size = 'small' | 'medium' | 'large';
export const px = (value: size | undefined): string => {
    if (!value || value === 'small') return '2rem';
    return value === 'medium' ? '4rem' : '8rem';
}

export const getProp = (props: any, prop: any, def: string) => props.prop ? props.prop : def;
