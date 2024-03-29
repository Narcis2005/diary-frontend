import styled from "styled-components";

export const NavbarContainer = styled.header`
    width: 100%;
    height: 4rem;
    background: white;
    z-index: 999;
    position: relative;
    top: 0;
`;
export const NavbarInnerContainer = styled.div`
    width: 80%;
    height: 100%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ImageContainer = styled.div`
    height: 60%;
    width: 80px;
`;
interface IMobileIconLine {
    isOpen: boolean;
}

export const MobileIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (min-width: 920px) {
        display: none;
    }
`;

export const MobileIconLine = styled.div<IMobileIconLine>`
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background-color: ${({ isOpen }) => (isOpen ? "transparent" : "black")};
    transform: ${({ isOpen }) => (isOpen ? "translateX(-35px)" : "")};
    transition: all 0.5s ease-in-out;
    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        border-radius: 2px;
        background-color: black;
        transition: all 0.5s ease-in-out;
    }
    &::after {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translate(25px, 25px)" : "translateY(-8px)")};
    }
    &::before {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translate(25px, -25px)" : "translateY(8px)")};
    }
`;
export const Nav = styled.nav<IMobileIconLine>`
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
    width: 65vw;
    min-height: 100vh;
    background-color: rgb(245, 245, 245);
    transition: all 0.5s ease-in-out;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    @media (min-width: 920px) {
        position: relative;
        left: 0;
        background-color: transparent;
        min-height: auto;
        width: auto;
        height: 30px;
    }
`;
export const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    min-height: 70vh;
    max-height: 90vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    @media (min-width: 920px) {
        flex-direction: row;
        min-height: auto;
        height: 40px;
    }
`;
interface INavItem {
    isCurrentPage: boolean;
    showOnMobile?: boolean;
    showOnDesktop?: boolean;
}
export const NavItem = styled.li<INavItem>`
    display: block;
    height: 20px;
    opacity: ${({ isCurrentPage }) => (isCurrentPage ? "1" : "0.8")};
    ${({ showOnMobile }) => (showOnMobile === true ? "" : "display:none")};

    font-size: 1.235rem;
    &:hover {
        opacity: 1;
    }
    @media (min-width: 920px) {
        margin: auto 10px;
        font-size: 1rem;
        height: 30px;
        display: flex;
        ${({ showOnDesktop }) => (showOnDesktop === true ? "" : "display: none;")};

        align-items: center;
    }
`;
export const LoginButton = styled.button`
    width: 100px;
    border-radius: 20px;
    border: none;
    color: white;
    background: black;
    height: 35px;
    letter-spacing: 1px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.135rem;
    @media (min-width: 920px) {
        width: 80px;
        height: 30px;
        border-radius: 12px;

        font-size: 0.9rem;
    }
`;
export const SignupButton = styled.button`
    background: transparent;
    width: 100px;
    border-radius: 20px;
    border: solid 2px black;
    color: black;
    height: 35px;
    font-size: 1.135rem;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    @media (min-width: 920px) {
        width: 70px;
        height: 30px;

        border-radius: 12px;
        font-size: 0.9rem;
        letter-spacing: normal;
    }
`;

export const DropdownContainer = styled.div`
    position: relative;
    margin-left: 10px;
`;

export const ProfileImageContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`;
interface IDropdownMenu {
    show: boolean;
}
export const DropdownMenu = styled.ul<IDropdownMenu>`
    position: absolute;
    display: ${({ show }) => (show ? "block" : "none")};
    background: rgb(230, 230, 230);
    width: 10rem;
    top: 100%;
    left: calc(-10rem + 40px);
    margin-top: 2px;
    border-radius: 6px;
    padding: 10px;
`;
export const DropdownItem = styled.li`
    list-style: none;
    margin: 10px 0;
    font-weight: 700;
    background: white;
    border-radius: 3px;
    cursor: pointer;
    & > * {
        width: 100%;
        display: block;
        padding: 3px 5px;
    }
`;
export const LoggedLinks = styled.div``;
