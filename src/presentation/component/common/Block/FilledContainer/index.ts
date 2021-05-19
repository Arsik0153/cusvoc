import styled from '@emotion/styled';

const FilledContainer = styled.div`
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.base};
    margin: 0 auto;
`;

export default FilledContainer;
