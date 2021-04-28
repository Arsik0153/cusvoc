import styled from '@emotion/styled';
import { rem } from 'polished';

export const Wrapper = styled.div`
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    height: 100%;
    display: grid;
    grid-template-rows: 7fr 3fr 3fr;
    padding: 40px 48px;
`;

export const Logo = styled.h2`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: center;
    font-size: ${rem(36)};
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Controls = styled.div`
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    gap: ${rem(20)};
`;

export const IntroText = styled.h3`
    font-size: ${rem(18)};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 12px;
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: end;
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.red};
    font-weight: 400;
`;
