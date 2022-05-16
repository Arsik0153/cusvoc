import styled from '@emotion/styled';
import { mq } from 'constant/mediaqueries';
import BaseButton from 'presentation/component/common/Control/Button';

export const Wrapper = styled.div`
    display: grid;
    gap: 30px;
    padding: 44px 15px;
    
    ${mq.greaterXs} {
        grid-template-columns: 1fr 1fr;
        padding: 44px 40px;
    }
`;

export const ImageWrapper = styled.div`
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

export const ContentWrapper = styled.div();

export const ActionWrapper = styled.div();

export const Name = styled.h1`
    font-weight: bold;
    font-size: 24px;
    
    ${mq.greaterXs} {
        margin-top: 40px;
    }
`;

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
`;

export const Text = styled.p`
    margin-top: 10px;
    font-size: 18px;
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

export const Button = styled(BaseButton)`
    margin-top: 20px;
`;
