import styled from "styled-components";

interface ICardContainer {
    isOdd: boolean;
}

export const TitleContainer = styled.div`
    padding-bottom: 5%;
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
`;

export const CardTitle = styled.h3``;
export const ContentContainer = styled.div`
    transition: color 0.2s ease-in-out;
`;
export const CardContent = styled.p`
    line-height: 1.8rem;
    font-size: 1.1rem;
    opacity: 0.8;
`;
export const CardContainer = styled.div<ICardContainer>`
    display: flex;
    text-align: left;
    background: white;
    margin: 5% 0;
    padding: 5% 10%;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    transition: background 0.2s ease-in-out;
    &:hover {
        background: black;
    }
    &:hover ${TitleContainer},&:hover ${ContentContainer} {
        color: white;
    }
    &:first-child {
        margin-top: 0;
        @media (min-width: 920px) {
            margin-top: 5%;
        }
    }
    @media (min-width: 920px) {
        text-align: ${({ isOdd }) => (isOdd ? "left" : "right")};
        border-radius: 8px;
    }
`;
