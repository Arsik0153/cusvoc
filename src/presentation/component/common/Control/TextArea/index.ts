import styled from "@emotion/styled";

const TextArea = styled.textarea`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 15px;
    padding: 19px 20px;
    width: 100%;
    height: 150px;
    resize: none;
    
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.red};
    }
`;

export default TextArea;