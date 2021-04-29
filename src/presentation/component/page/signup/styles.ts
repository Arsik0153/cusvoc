import styled from '@emotion/styled';
import BaseButton from 'presentation/component/common/Control/Button';

export const Wrapper = styled.div`
    padding: 40px 48px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
`;

export const Controls = styled.div`
    margin-top: 30px;
    display: grid;
    gap: 14px;
`;

export const Button = styled(BaseButton)`
    margin-top: auto;
`;
