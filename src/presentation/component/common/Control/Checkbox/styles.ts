import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { rgba } from 'polished';
import BaseButton from 'presentation/component/common/Control/Button';
import { ThemeT } from 'presentation/context/Theme';

const activeButtonCss = (theme: ThemeT): SerializedStyles => css`
    box-shadow: 0 15px 15px ${rgba(theme.colors.red, 0.2)};
`;

const inActiveButtonCss = (theme: ThemeT): SerializedStyles => css`
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.text};
`;

const Control = styled(BaseButton)`
    padding: 12px 20px;
    text-align: left;

    ${({ theme, inverted }) => !inverted && activeButtonCss(theme)}
    ${({ theme, inverted }) => inverted && inActiveButtonCss(theme)}
`;

export default Control;
