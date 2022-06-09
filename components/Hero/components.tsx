import Image from "next/image";
import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    min-height: 100vh; /* the nav height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    /* z-index: -1; */
    margin-top: -4rem;
    @media (min-width: 920px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10%;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10%;
    @media (min-width: 920px) {
        width: 35%;
        padding: 0;
        text-align: left;
        /* margin-top: -4rem; */
    }
`;
export const HeadingContainer = styled.div`
    padding: 5% 0;
`;
export const HeadingMessage = styled.h1`
    font-size: 3.5rem;
`;
export const ParagraphContainer = styled.div`
    padding: 5% 0;
`;

export const Paragraph = styled.p`
    line-height: 1.8rem;
    opacity: 0.8;
`;
export const StartWritingButtonContainer = styled.div`
    padding: 2% 0;
`;
export const StartWritingButton = styled.button`
    width: 160px;
    border-radius: 10px;
    border: none;
    color: white;
    background: black;
    height: 50px;
    letter-spacing: 1px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.235rem;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`;
export const IllustrationContainer = styled.div`
    width: 70%;
    @media (min-width: 920px) {
        width: 50%;
    }
`;
export const IllustrationImage = styled(Image)``;
