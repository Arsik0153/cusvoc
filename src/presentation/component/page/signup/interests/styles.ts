import styled from '@emotion/styled';
import { rgba } from 'polished';
import BaseButton from 'presentation/component/common/Control/Button';

export const Wrapper = styled.div`
    padding: 48px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
`;

export const Text = styled.p`
    font-size: 14px;
    color: ${({ theme }) => rgba(theme.colors.text, 0.7)};
`;

export const Controls = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 15px;
`;

export const Button = styled(BaseButton)`
    margin-top: 30px;
    height: auto;
`;
