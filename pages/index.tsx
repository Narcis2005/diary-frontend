import type { NextPage } from "next";
import Head from "next/head";
import AchieveYourGoals from "../components/AchieveYourGoals";
import Hero from "../components/Hero";
import ShouldYouWriteADiary from "../components/ShouldYouWriteADiary";
import WhyUs from "../components/WhyUs";
import DefaultContainer from "../containers/DefaultContaienr";


const Home: NextPage = () => {
    return (
        <>
            
            <Head>
                <title>Diary - A safe place</title>
                <meta name="description" content="At diary you can write your online personal diary and save it in a secure way." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <DefaultContainer>
            <Hero />
            <WhyUs />
            <ShouldYouWriteADiary />
            <AchieveYourGoals />
        </DefaultContainer>
        </>
    );
};

export default Home;
