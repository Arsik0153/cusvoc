import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ThemeT } from 'presentation/context/Theme';

type ButtonPropsT = {
    inverted?: boolean;
    $disabled?: boolean;
};

const defaultButtonCss = (theme: ThemeT): SerializedStyles => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.base};
    border: 2px solid transparent;
`;

const invertedButtonCss = (theme: ThemeT): SerializedStyles => css`
    background-color: ${theme.colors.base};
    color: ${theme.colors.red};
    border: 2px solid #f3f3f3;
`;

const disabledButtonCss = (theme: ThemeT): SerializedStyles => css`
    opacity: 0.4;
    cursor: wait;
`;

const Button = styled.button<ButtonPropsT>`
    cursor: pointer;
    padding: 16px 32px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 15px;
    width: 100%;

    ${({ theme, inverted }) => !inverted && defaultButtonCss(theme)}
    ${({ theme, inverted }) => inverted && invertedButtonCss(theme)}
    ${({ theme, $disabled }) => $disabled && disabledButtonCss(theme)}
`;

export default Button;
