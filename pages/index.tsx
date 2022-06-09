import type { NextPage } from "next";
import Head from "next/head";
import AchieveYourGoals from "../components/AchieveYourGoals";
import Hero from "../components/Hero";
import ShouldYouWriteADiary from "../components/ShouldYouWriteADiary";
import WhyUs from "../components/WhyUs";
import DefaultContainer from "../containers/DefaultContaienr";

export interface IReason {
    title: string;
    content: string;
}
const Home: NextPage = () => {
    const reasons = [
        {
            title: "First reason",
            content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef",
        },
        {
            title: "Second reason",
            content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef",
        },
        {
            title: "Third reason",
            content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef",
        },
        {
            title: "Fourth reason",
            content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef",
        },
        {
            title: "Fifth reason",
            content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef",
        },
        {
            title: "Sixth reason",
            content: "Lorem ipsum dolor fudfsaf dafuasd acv dsafdsa fg aaefef ewef",
        },
    ];
    return (
        <>
            <Head>
                <title>Diary - A safe place</title>
                <meta
                    name="description"
                    content="At diary you can write your online personal diary and save it in a secure way."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                <Hero />
                <WhyUs reasons={reasons} />
                <ShouldYouWriteADiary />
                <AchieveYourGoals />
            </DefaultContainer>
        </>
    );
};

export default Home;
