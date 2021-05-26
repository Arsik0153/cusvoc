import styled from '@emotion/styled';
import { rgba } from 'polished';

export const OuterWrapper = styled.div();

export const Wrapper = styled.div`
    width: 100%;
    height: 450px;
    margin-top: 24px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    border-radius: 15px;
`;

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    padding: 20px 16px;
    color: #fff;
    background-color: ${rgba('#000', 0.4)};
    width: 100%;
    backdrop-filter: blur(10px);
`;

export const Name = styled.h2();

export const SubHeader = styled.h3`
    margin-top: 30px;
`;

export const Text = styled.p`
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: 18px;
    line-height: 26px;
    margin-top: 10px;
`;

export const Description = styled.p`
    margin-top: 5px;
`;

export const ActionsWrapper = styled.div`
    position: relative;
    top: -50px;
`;

export const InfoWrapper = styled.div`
    background: #ffffff;
    width: 100%;
    border-radius: 30px 30px 0 0;
    margin-top: -50px;
    position: relative;
`;

export const InterestsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Interest = styled.span`
    border: 1px solid ${({ theme }) => theme.colors.red};
    padding: 5px 15px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
`;
