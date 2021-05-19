import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
`;

export const Inner = styled.div`
    margin-top: 24px;
    display: grid;
    gap: 20px;
`;

export const Match = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    &:hover h3 {
        transform: translateX(15px);
    }
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
`;

export const Name = styled.h3`
    font-weight: ${({ theme }) => theme.font.weight.regular};
    transition: 0.3s;
`;
