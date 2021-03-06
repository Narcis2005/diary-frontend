import styled from "styled-components";

export const WhyUsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: rgb(245, 245, 245);
    padding: 4rem 0;
    @media (min-width: 920px) {
        align-items: center;
    }
`;
export const TextContainer = styled.div`
    text-align: center;
    padding-bottom: 3rem;
`;
export const TitleWhyUs = styled.h2`
    font-size: 2.5rem;
`;
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 80%;
    justify-content: center;
    @media (min-width: 920px) {
        width: 80%;
        grid-template-columns: 1fr 1fr;
        column-gap: 2%;
    }
`;
