import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mq } from 'constant/mediaqueries';

type InteractionPropsT = {
    opacify: boolean;
};

const opacifyCss = css`
    opacity: 0.5;
    pointer-events: none;
    cursor: wait;
`;

export const Wrapper = styled.div();

export const Inner = styled.div`
    display: grid;
    gap: 30px;
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

export const Interaction = styled.div<InteractionPropsT>`
    transition: 0.3s;

    ${({ opacify }) => opacify && opacifyCss}
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
`;

export const SubTitle = styled.h3`
    font-size: 18px;
    text-align: center;
`;