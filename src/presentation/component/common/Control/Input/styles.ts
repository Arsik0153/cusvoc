import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const Control = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 15px;
    padding: 19px 20px;
    width: 100%;

    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.red};
    }
`;
