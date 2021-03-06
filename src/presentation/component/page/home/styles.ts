import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mq } from 'constant/mediaqueries';

export const Wrapper = styled.div`
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    padding: 30px 48px;

    ${mq.lowerXs} {
        padding: 30px 15px;
    }
`;

export const Banner = styled.div`
    width: 100%;
    border-radius: 15px;
    color: #000;
    display: grid;
    gap: 20px;

    ${mq.greaterXs} {
        grid-template-columns: 1fr 1fr;
        padding: 40px 0;
    }
`;

export const Content = styled.div``;

export const ImageWrapper = styled.div`
    ${mq.lowerXs} {
        display: flex;
        justify-content: center;
    }
`;

export const Heading = styled.h1`
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    height: fit-content;
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
`;

export const Text = styled.p`
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: 18px;
    line-height: 24px;
`;

export const datingCss = css`
    grid-row: 1 / 3;
    width: 100%;

    ${mq.lowerXs} {
        width: 70%;
    }
`;

export const MicroText = styled.p`
    font-size: 14px;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin: 50px 0 20px 0;

    ${mq.lowerXs} {
        margin: 30px 0 20px 0;
    }
`;

export const Link = styled.a`
    text-decoration: underline;
    color: #000;
    line-height: 20px;
`;
