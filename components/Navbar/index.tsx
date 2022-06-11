import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    Nav,
    LoginButton,
    LogoContainer,
    MobileIcon,
    MobileIconLine,
    NavbarContainer,
    NavbarInnerContainer,
    NavItem,
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
                            {/* An error appears when you put a Link on Image */}
                            <a>
                            <Image alt="logo" src="/logo1.svg" width={80} height={50} layout="responsive" style={{cursor: "pointer"}} />
                            </a> 
                        </Link>
                    </ImageContainer>
                </LogoContainer>
                <Nav isOpen={isMobileMenuOpen}> 
                    <NavLinks>
                        <NavItem isCurrentPage={router.pathname === "/"}>
                            <Link href={"/"}>Home</Link> 
                        </NavItem>
                        <NavItem isCurrentPage={router.pathname === "/about"}>
                            <Link href={"/about"}>About</Link>
                        </NavItem>
                        <NavItem isCurrentPage={router.pathname === "/contact"}>
                            <Link href={"/contact"}>Contact</Link>
                        </NavItem>
                        {/* <NavItem isCurrentPage={router.pathname === "/security"}>
                            <Link href={"/security"}>Security</Link>
                        </NavItem> */}
                        <NavItem isCurrentPage={router.pathname === "/login"}>
                            <Link href={"/login"} passHref>
                                <LoginButton>Login</LoginButton>
                            </Link>
                        </NavItem>
                        <NavItem isCurrentPage={router.pathname === "/register"}>
                            <Link href={"/register"} passHref>
                                <SignupButton>Sign up</SignupButton>
                            </Link>
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
