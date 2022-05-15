import { css, SerializedStyles } from '@emotion/react';
import { fontFace } from 'polished';
import { ThemeT } from 'presentation/context/Theme';

const fontsCss = (theme: ThemeT): SerializedStyles => css`
    html,
    body {
        font-family: ${theme.font.family.base}, sans-serif;
        padding: 200px;
    }
  
    body {
      overflow-y: scroll;
    }

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Regular',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.regular,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Black',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.black,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Bold',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.bold,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Heavy',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.heavy,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Light',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.light,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Medium',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.medium,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Semibold',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.semibold,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFPro/SFProDisplay-Ultralight',
        fileFormats: ['woff'],
        fontWeight: theme.font.weight.ultralight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}
`;

export default fontsCss;
