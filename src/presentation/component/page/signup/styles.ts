import styled from '@emotion/styled';
import { rgba } from 'polished';
import BaseButton from 'presentation/component/common/Control/Button';
import { mq } from 'constant/mediaqueries';

export const Wrapper = styled.div`
    padding: 20px 48px;

    ${mq.lowerXs} {
        padding: 20px 15px;
    }
`;

export const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
    margin-top: 40px;

    ${mq.lowerXs} {
        font-size: 24px;
    }
`;

export const Controls = styled.div`
    margin-top: 30px;
    display: grid;
    gap: 14px;

    ${mq.greaterXs} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const InterestsControl = styled.div`
    margin-top: 30px;
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Button = styled(BaseButton)`
    display: block;
    margin: 30px auto;
    max-width: 200px;
`;

export const Text = styled.p`
    font-size: 14px;
    color: ${({ theme }) => rgba(theme.colors.text, 0.7)};
`;

export const ImageBlock = styled.label`
    position: relative;
    background-color: ${({ theme }) => theme.colors.red};
    width: 100px;
    height: 100px;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    margin-top: 30px;
    flex-shrink: 0;
`;

export const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid #fff;
    position: absolute;
    bottom: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FileInput = styled.input`
    display: none;
`;

export const FileName = styled.p`
    text-align: center;
    margin-top: 20px;
`;
