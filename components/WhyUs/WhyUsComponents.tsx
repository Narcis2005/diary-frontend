import styled from "styled-components";

export const WhyUsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: rgb(245, 245, 245);
    padding: 4rem 0;
`;
export const TextContainer = styled.div`
    text-align: center;
    padding-bottom: 3rem ;
`;
export const TitleWhyUs = styled.h2`
    font-size: 2.5rem;
`;
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 80%;
    justify-content: center;
    @media (min-width: 920px) {
        grid-template-columns: 37.5% 37.5%;
        column-gap: 5%;
    }
`;