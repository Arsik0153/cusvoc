import styled from '@emotion/styled';
import { mq } from 'constant/mediaqueries';

export const Wrapper = styled.div();

export const Inner = styled.div`
    display: grid;
    padding: 44px 15px;

    ${mq.greaterXs} {
        grid-template-columns: 1fr 1fr;
        padding: 44px 40px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
`;

export const Interaction = styled.div``;
