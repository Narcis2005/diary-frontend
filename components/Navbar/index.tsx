import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useHideOnOutsideCall from "../../hooks/useHideOnOutsideClick";
import useLogout from "../../hooks/useLogout";
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
    const navContainerRef = useRef<HTMLHeadingElement>(null);
    const { setShowClick: setShowMobileIcon, showClick: showMobileIcon } = useHideOnOutsideCall(
        navContainerRef.current,
    );
    const [showDropdwonMenu, setShowDropdownMenu] = useState(false);
    const handleMobileNavIconClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowMobileIcon(!showMobileIcon);
    };
    const handleDropdownMenuClick = () => {
        setShowDropdownMenu((prevShow) => !prevShow);
    };

    //in test, router is undefined
    const [pathname, setPathname] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (router?.isReady) {
            setPathname(router.pathname);
        }
    }, [router?.isReady, router?.pathname]);
    const Logout = useLogout();
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

                <Nav isOpen={showMobileIcon}>
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
                                        <DropdownMenu show={showDropdwonMenu}>
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
                <MobileIcon onClick={handleMobileNavIconClick}>
                    <MobileIconLine isOpen={showMobileIcon} />
                </MobileIcon>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
};
export default Navbar;
