import Image from "next/image";
import { ImageHeroContainer, ImageContainer } from "./ImageHeroComponents";

const ImageHero = () => {
    return (
        <>  
            <ImageHeroContainer>
                <ImageContainer>
                    <Image src={"/diary-picture.jpeg"}  layout="fill" objectFit="cover" alt="diary with pencil"></Image>
                </ImageContainer>
            </ImageHeroContainer>
        </>
    );
};
export default ImageHero;