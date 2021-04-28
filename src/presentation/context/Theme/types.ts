export enum ThemeType {
    Light,
}

export type ThemeT = {
    type: ThemeType;
    colors: {
        base: string;
        text: string;
        red: string;
        bg: string;
    };
    font: {
        weight: {
            regular: string;
            black: string;
            bold: string;
            heavy: string;
            light: string;
            medium: string;
            semibold: string;
            ultralight: string;
        };
        family: {
            base: string;
        };
    };
};

export type ContextT = {
    themeType: ThemeType;
    setThemeType: (themeType: ThemeType) => void;
};
