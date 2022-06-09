import Image from "next/image";
import { BackgroundContainer } from "./BackgroundImageComponents";

const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <BackgroundContainer>
                <Image alt="abstract" src="/7.svg" layout="fill" objectFit="cover" priority={true}></Image>
                {children}
            </BackgroundContainer>
        </>
    );
};

export default BackgroundImage;
