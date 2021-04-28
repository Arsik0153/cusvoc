import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ThemeT } from 'presentation/context/Theme';

type ButtonPropsT = {
    inverted?: boolean;
};

const defaultButtonCss = (theme: ThemeT): SerializedStyles => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.base};
`;

const invertedButtonCss = (theme: ThemeT): SerializedStyles => css`
    background-color: ${theme.colors.base};
    color: ${theme.colors.red};
    border: 2px solid #f3f3f3;
`;

const Button = styled.button<ButtonPropsT>`
    cursor: pointer;
    line-height: 0;
    padding: 0 32px;
    height: 56px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 15px;
    width: 100%;

    ${({ theme, inverted }) => !inverted && defaultButtonCss(theme)}
    ${({ theme, inverted }) => inverted && invertedButtonCss(theme)}
`;

export default Button;
