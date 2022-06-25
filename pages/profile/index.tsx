import ProfileComponent from "../../components/ProfileComponent";
import DefaultContainer from "../../containers/DefaultContaienr";
import { useAppSelector } from "../../redux/hooks";
import withAuth from "../../utils/withAuth";

const Profile = () => {
    const user = useAppSelector((state) => state.user);
    const data = {
        username: user.result.username,
        email: user.result.email,
        fullName: user.result.fullName,
        imageURL: "/profilePlaceholder.png",
    };

    return (
        <>
            <DefaultContainer>
                <ProfileComponent {...data} />
            </DefaultContainer>
        </>
    );
};
export default withAuth(Profile);
