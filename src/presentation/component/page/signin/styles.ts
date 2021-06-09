import styled from '@emotion/styled';
import { mq } from 'constant/mediaqueries';
import BaseButton from 'presentation/component/common/Control/Button';

export const Wrapper = styled.div`
    padding: 20px 48px;

    ${mq.lowerXs} {
        padding: 20px 15px;
    }
`;

export const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
    margin-top: 40px;

    ${mq.lowerXs} {
        font-size: 24px;
    }
`;

export const Controls = styled.div`
    max-width: 400px;
    margin-top: 30px;
    width: 100%;
    display: grid;
    gap: 14px;
`;

export const Button = styled(BaseButton)`
    display: block;
    margin: 30px auto;
    max-width: 200px;
`;
