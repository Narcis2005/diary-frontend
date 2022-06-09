import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    Nav,
    LoginButton,
    Logo,
    LogoContainer,
    MobileIcon,
    MobileIconLine,
    NavbarContainer,
    NavbarInnerContainer,
    NavItem,
    NavLink,
    NavLinks,
    SignupButton,
    ImageContainer,
} from "./NavbarComponents";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleMobileClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const navContainerRef = useRef<HTMLHeadingElement>(null);
    const checkOutsideClick = useCallback((e: MouseEvent) => {
        if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
            setIsMobileMenuOpen(false);
        }
    }, []);
    const router = useRouter();
    useEffect(() => {
        document.addEventListener("mouseup", checkOutsideClick);
    }, [checkOutsideClick]);
    //I think it's not necessary to do this, knowing that the nav is always rendered
    useEffect(() => {
        return () => {
            document.removeEventListener("mouseup", checkOutsideClick);
        };
    }, [checkOutsideClick]);
    return (
        <NavbarContainer ref={navContainerRef}>
            <NavbarInnerContainer>
                <LogoContainer>
                    <ImageContainer>
                        <Link href={"/"} passHref>
                        <Logo src="/logo1.svg" width="80" height="50" />

                        </Link>
                    </ImageContainer>
                </LogoContainer>
                <Nav isOpen={isMobileMenuOpen}>
                    <NavLinks>
                        <NavItem isCurrentPage={router.pathname === "/"}>
                            <NavLink href={"/"}>Home</NavLink>
                        </NavItem>
                        <NavItem isCurrentPage={router.pathname === "/about"}>
                            <NavLink href={"/about"}>About</NavLink>
                        </NavItem>
                        <NavItem isCurrentPage={router.pathname === "/contact"}>
                            <NavLink href={"/contact"}>Contact</NavLink>
                        </NavItem>
                        {/* <NavItem isCurrentPage={router.pathname === "/security"}>
                            <NavLink href={"/security"}>Security</NavLink>
                        </NavItem> */}
                        <NavItem isCurrentPage={router.pathname === "/login"}>
                            <NavLink href={"/login"}>
                                <LoginButton>Login</LoginButton>
                            </NavLink>
                        </NavItem>
                        <NavItem isCurrentPage={router.pathname === "/register"}>
                            <NavLink href={"/register"}>
                                <SignupButton>Sign up</SignupButton>
                            </NavLink>
                        </NavItem>
                    </NavLinks>
                </Nav>
                <MobileIcon onClick={handleMobileClick}>
                    <MobileIconLine isOpen={isMobileMenuOpen} />
                </MobileIcon>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
};
export default Navbar;
