import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mq } from 'constant/mediaqueries';

type PageLinkT = {
    active: boolean;
};

export const Wrapper = styled.header`
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 48px;
    /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04); */

    ${mq.lowerXs} {
        padding: 0 15px;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.a`
    font-size: 22px;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    color: #000;
`;

export const Right = styled.ul`
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: 15px;
`;

export const PageLink = styled.a<PageLinkT>`
    color: #000;
    font-size: 18px;

    ${({ active, theme }) =>
        active &&
        css`
            color: ${theme.colors.red};
        `}
`;
