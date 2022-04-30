import { FooterContainer, FooterTextContentContainer, FooterTextContent, FooterLogoContainer, Logo, FooterMenuContainer, FooterMenu, FooterMenuItem, FooterMenuLink, FooterImageContainer, FooterCopyright, FooterMenuTitle } from "./components";

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
                            <FooterMenuLink href="/">Home</FooterMenuLink>
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <FooterMenuLink href="/contact">Contact</FooterMenuLink>
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <FooterMenuLink href="/about">Home</FooterMenuLink>
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <FooterMenuLink href="/security">Home</FooterMenuLink>
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