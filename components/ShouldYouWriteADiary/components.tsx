import styled from "styled-components";

export const ShouldYouWriteADiaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 4rem 2rem;
    text-align: center;
    @media (min-width: 920px) {
        padding: 4rem 0;
    }
`;
export const TitleContainer = styled.div`
    padding-bottom: 2rem;
`;
export const ShouldYouWriteADiaryTitle = styled.h2`
    font-size: 2.5rem;
`;
export const ShouldYouWriteADiaryContentContainer = styled.div`
    line-height: 1.8rem;
    @media (min-width: 920px) {
        width: 80%;
        font-size: 18px;
    }
`;

export const ShouldYouWriteADiaryContent = styled.p`
    opacity: 0.8;
`;
