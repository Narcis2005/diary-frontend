import Image from "next/image";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    padding: 4rem 2rem;
    flex-wrap: wrap;
    border-top: 5px solid rgb(245, 245, 245);
    & > * {
        padding-bottom: 3rem;
    }
    padding-bottom: 0;
    @media (min-width: 768px) {
        justify-content: center;
        padding: 4rem 10%;
        padding-bottom: 0;
    }
`;
export const FooterTextContentContainer = styled.div`
    flex-basis: 100%;

    @media (min-width: 768px) {
        flex-basis: 50%;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 1000px) {
        flex-basis: 33%;
    }
`;
export const FooterTextContent = styled.h4`
    font-size: 1.5rem;
    opacity: 0.8;
`;

export const FooterLogoContainer = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 920px) {
        flex-basis: 50%;
        align-items: flex-end;
    }
    @media (min-width: 1000px) {
        flex-basis: 33%;
    }
`;
export const FooterImageContainer = styled.div`
    width: 40%;
    height: auto;
    position: relative;
    padding-bottom: 10px;
    opacity: 0.8;
`;
export const Logo = styled(Image)``;
export const FooterCopyright = styled.h4`
    font-size: 1.2rem;
    opacity: 0.8;
`;
export const FooterMenuContainer = styled.nav`
    flex-basis: 100%;
    @media (min-width: 768px) {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 1000px) {
        flex-basis: 33%;
    }
`;
export const FooterMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const FooterMenuTitle = styled.h4`
    opacity: 0.8;
    font-size: 1.2rem;
    padding-bottom: 1rem;
`;
export const FooterMenuItem = styled.li`
    list-style: none;
    text-decoration: underline;
    font-size: 18px;
    opacity: 0.6;
`;