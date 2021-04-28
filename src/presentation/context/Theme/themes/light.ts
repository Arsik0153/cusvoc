import { ThemeT, ThemeType } from 'presentation/context/Theme/types';

const light: ThemeT = {
    type: ThemeType.Light,
    colors: {
        base: '#FFFFFF',
        text: '#000000',
        red: '#E94057',
        bg: '#F3F3F3',
    },
    font: {
        family: {
            base: 'SF Pro Display',
        },
        weight: {
            regular: '400',
            black: '800',
            bold: '700',
            heavy: '900',
            light: '300',
            medium: '500',
            semibold: '600',
            ultralight: '200',
        },
    },
};

export default light;
