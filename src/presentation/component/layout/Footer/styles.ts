import styled from '@emotion/styled';
import { mq } from 'constant/mediaqueries';

export const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.red};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 48px;

    ${mq.lowerXs} {
        display: grid;
        justify-content: center;
        gap: 15px;
    }
`;

export const Text = styled.p();

export const Right = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 15px;
    justify-items: center;
`;
