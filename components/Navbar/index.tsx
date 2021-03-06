import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/slices/auth";
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
    DropdownContainer,
    ProfileImageContainer,
    DropdownItem,
    DropdownMenu,
} from "./NavbarComponents";

const Navbar = ({ profileImageURL }: { profileImageURL?: string }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleMobileClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const navContainerRef = useRef<HTMLHeadingElement>(null);
    //If the click is outside the nav, close the mobile nav
    const checkOutsideClick = useCallback((e: MouseEvent) => {
        if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
            setIsMobileMenuOpen(false);
            setShow(false);
        }
    }, []);
    //in test, router is undefined
    const [pathname, setPathname] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (router?.isReady) {
            setPathname(router.pathname);
        }
    }, [router?.isReady, router?.pathname]);
    useEffect(() => {
        document.addEventListener("mouseup", checkOutsideClick);
    }, [checkOutsideClick]);

    //I think it's not necessary to do this, knowing that the nav is always rendered
    useEffect(() => {
        return () => {
            document.removeEventListener("mouseup", checkOutsideClick);
        };
    }, [checkOutsideClick]);
    const [show, setShow] = useState(false);
    const handleDropdownMenuClick = () => {
        setShow((prevShow) => !prevShow);
    };
    const dispatch = useAppDispatch();
    const Logout = () => {
        void dispatch(logoutUser());
    };
    return (
        <NavbarContainer ref={navContainerRef}>
            <NavbarInnerContainer>
                <LogoContainer>
                    <ImageContainer>
                        <Link href={"/"} passHref>
                            {/* An error appears when you put a Link on Image */}
                            <a>
                                <Image
                                    alt="logo"
                                    src="/logo1.svg"
                                    width={80}
                                    height={50}
                                    priority={true}
                                    layout="responsive"
                                    style={{ cursor: "pointer" }}
                                />
                            </a>
                        </Link>
                    </ImageContainer>
                </LogoContainer>

                <Nav isOpen={isMobileMenuOpen}>
                    <NavLinks>
                        <NavItem isCurrentPage={pathname === "/"} showOnMobile showOnDesktop>
                            <Link href={"/"}>Home</Link>
                        </NavItem>
                        <NavItem isCurrentPage={pathname === "/about"} showOnMobile showOnDesktop>
                            <Link href={"/about"}>About</Link>
                        </NavItem>
                        <NavItem isCurrentPage={pathname === "/contact"} showOnMobile showOnDesktop>
                            <Link href={"/contact"}>Contact</Link>
                        </NavItem>
                        {!profileImageURL && (
                            <>
                                <NavItem isCurrentPage={pathname === "/login"} showOnMobile showOnDesktop>
                                    <Link href={"/login"} passHref>
                                        <LoginButton>Login</LoginButton>
                                    </Link>
                                </NavItem>
                                <NavItem isCurrentPage={pathname === "/register"} showOnMobile showOnDesktop>
                                    <Link href={"/register"} passHref>
                                        <SignupButton>Sign up</SignupButton>
                                    </Link>
                                </NavItem>
                            </>
                        )}

                        {profileImageURL && (
                            <>
                                <NavItem isCurrentPage={pathname === "/profile"} showOnMobile showOnDesktop={false}>
                                    <Link href={"/profile"}>Profile</Link>
                                </NavItem>
                                <NavItem isCurrentPage={pathname === "/journal"} showOnMobile showOnDesktop={false}>
                                    <Link href={"/journal"}>Write</Link>
                                </NavItem>
                                <NavItem isCurrentPage={false} showOnMobile showOnDesktop={false} onClick={Logout}>
                                    <Link href={"/"}>Logout</Link>
                                </NavItem>

                                <NavItem isCurrentPage={true} showOnMobile={false} showOnDesktop={true}>
                                    <DropdownContainer>
                                        <ProfileImageContainer onClick={handleDropdownMenuClick}>
                                            <Image
                                                src={profileImageURL}
                                                alt="profile image"
                                                layout="responsive"
                                                width="80"
                                                height="80"
                                                data-testid="profile-image"
                                            />
                                        </ProfileImageContainer>
                                        <DropdownMenu show={show}>
                                            <DropdownItem onClick={handleDropdownMenuClick}>
                                                <Link href="/profile">Profile</Link>
                                            </DropdownItem>
                                            <DropdownItem onClick={handleDropdownMenuClick}>
                                                <Link href="/journal">Write</Link>
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() => {
                                                    handleDropdownMenuClick();
                                                    Logout();
                                                }}
                                            >
                                                <Link href="/">Logout</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </DropdownContainer>
                                </NavItem>
                            </>
                        )}
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
