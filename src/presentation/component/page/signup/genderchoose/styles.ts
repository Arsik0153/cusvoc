import styled from '@emotion/styled';
import BaseButton from 'presentation/component/common/Control/Button';

export const Wrapper = styled.div`
    padding: 40px 48px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
`;

export const Controls = styled.div`
    display: grid;
    gap: 10px;
`;

export const Button = styled(BaseButton)`
    margin-top: auto;
`;
