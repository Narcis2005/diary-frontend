import ProfileComponent from "../../components/ProfileComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import { useAppSelector } from "../../redux/hooks";
import withAuth from "../../utils/withAuth";
import Head from "next/head";
const Profile = () => {
    const user = useAppSelector((state) => state.user);
    const data = {
        username: user.result.username,
        email: user.result.email,
        fullName: user.result.fullName,
        imageURL: user.result.imageURL,
    };

    return (
        <>
            <Head>
                <title>
                    {user.result.username} ({user.result.fullName})
                </title>
                <meta name="description" content={`Profile page of ${user.result.fullName}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultContainer>
                <ProfileComponent {...data} />
            </DefaultContainer>
        </>
    );
};
export default withAuth(Profile);
