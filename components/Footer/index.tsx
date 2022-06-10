import Link from "next/link";
import {
    FooterContainer,
    FooterTextContentContainer,
    FooterTextContent,
    FooterLogoContainer,
    Logo,
    FooterMenuContainer,
    FooterMenu,
    FooterMenuItem,
    FooterImageContainer,
    FooterCopyright,
    FooterMenuTitle,
} from "./components";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterTextContentContainer>
                    <FooterTextContent>Lorem ipsum, dolor sit amet consectetur adipisicing elit</FooterTextContent>
                </FooterTextContentContainer>

                <FooterMenuContainer>
                    <FooterMenuTitle>Menu</FooterMenuTitle>
                    <FooterMenu>
                        <FooterMenuItem>
                            <Link href="/">Home</Link>
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <Link href="/contact">Contact</Link>
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <Link href="/about">Home</Link>
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <Link href="/security">Home</Link>
                        </FooterMenuItem>
                    </FooterMenu>
                </FooterMenuContainer>
                <FooterLogoContainer>
                    <FooterImageContainer>
                        <Logo src="/logo1.svg" height="80" width="160" />
                    </FooterImageContainer>
                    <FooterCopyright>&copy; Chirilov Narcis 2022</FooterCopyright>
                </FooterLogoContainer>
            </FooterContainer>
        </>
    );
};

export default Footer;
