import styled from "@emotion/styled";
import { mq } from 'constant/mediaqueries';

export const Wrapper = styled.div`
    padding: 30px 48px;
  
    ${mq.lowerXs} {
      padding: 30px 15px;
    }
`;

export const Title = styled.h2`
    font-size: 24px;
`;

export const Text = styled.p`
    margin-top: 20px;
    font-size: 18px;
`;

export const Iframe = styled.iframe`
    border: 0;
    width: 100%;
    height: 450px;
    margin-top: 50px;
    border-radius: 10px;
`;