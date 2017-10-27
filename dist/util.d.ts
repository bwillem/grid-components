export declare const rgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export declare const a: (rgb: {
    r: number;
    g: number;
    b: number;
} | null, a: Number) => string;
export declare const shade: (color: string, percent: Number) => string;
export declare type size = 'small' | 'medium' | 'large';
export declare const px: (value: "small" | "medium" | "large" | undefined) => string;
export declare const getProp: (props: any, prop: any, def: string) => any;
