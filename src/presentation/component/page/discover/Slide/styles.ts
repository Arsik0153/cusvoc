import styled from '@emotion/styled';
import { rgba } from 'polished';

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

export const Description = styled.p`
    margin-top: 5px;
`;
