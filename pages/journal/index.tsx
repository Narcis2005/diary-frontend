import JournalComponent from "../../components/JournalComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import withAuth from "../../utils/withAuth";
import { useAppSelector } from "../../redux/hooks";
import Head from "next/head";
import useGetDiary from "../../hooks/useGetDiary";
import useScrollToTop from "../../hooks/useScrollToTop";
const Journal = () => {
    const user = useAppSelector((state) => state.user);
    useScrollToTop();
    const { status, diary, error } = useGetDiary();
    return (
        <>
            <Head>
                <title>{user.result.username}&apos;s diary</title>
                <meta name="description" content={`The private diary of ${user.result.fullName}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                {error && (
                    <>
                        {/* to be implemented */}
                        {error}
                    </>
                )}
                {status === "succesfull" && diary && (
                    <>
                        <JournalComponent
                            data={diary?.map((entry) => ({
                                content: entry.content,
                                date: new Date(entry.createdAt),
                                id: entry.id,
                            }))}
                        />
                    </>
                )}
            </DefaultContainer>
        </>
    );
};

export default withAuth(Journal);
