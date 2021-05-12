import styled from '@emotion/styled';
import BaseButton from 'presentation/component/common/Control/Button';

export const Wrapper = styled.div`
    padding: 48px 40px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
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

export const Button = styled(BaseButton)`
    margin-top: 90%;
    height: auto;
`;
