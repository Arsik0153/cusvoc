import styled from '@emotion/styled';

const FilledContainer = styled.div`
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.base};
    overflow-y: auto;
`;

export default FilledContainer;
