import Head from "next/head";
import { NextPage } from "next/types";
import AboutText from "../../components/AboutText";
import ImageHero from "../../components/ImageHero";
import DefaultContainer from "../../containers/DefaultContaienr";

const About: NextPage = () => {
    return (
        <>
        <Head>
                <title>About - Diary</title>
                <meta name="description" content="At diary you can write your online personal diary and save it in a secure way." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
            <ImageHero />
            <AboutText />
        </DefaultContainer>
                </>
        
    );
};
export default About;