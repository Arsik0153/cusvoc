import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
    margin-top: 21px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Default = styled.button`
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.07);
    background-color: #fff;
    width: 78px;
    height: 78px;
    border-radius: 100%;
    cursor: pointer;
`;

export const Main = styled.button`
    width: 100px;
    height: 100px;
    background-color: #e94057;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 15px 15px rgba(233, 64, 87, 0.2);
`;

export const closeIconCss = css`
    width: 20px;
    transition: 0.3s;
`;

export const starIconCss = css`
    width: 30px;
    transition: 0.3s;
`;

export const heartIconCss = css`
    width: 45px;
    transition: 0.3s;
    fill: #fff;
`;
