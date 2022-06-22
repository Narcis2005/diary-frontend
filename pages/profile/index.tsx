import ProfileComponent from "../../components/ProfileComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

const Profile = () => {
    const data = {
        username: "Narcis",
        email: "chirilov.narcis@yahoo.ro",
        fullName: "Chirilov Narcis",
        imageURL: "/pozaCuMine.jpg",
    };
    
    return (
        <>
            <DefaultContainer>
                <ProfileComponent {...data} />
            </DefaultContainer>
        </>
    );
};
export default Profile;
