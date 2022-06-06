import BackgroundImage from "../../components/BackgroundImage";
import RegisterComponent from "../../components/RegisterComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

const Register = () => {
    return (
        <>
        <DefaultContainer>
            <BackgroundImage>
                <RegisterComponent />
            </BackgroundImage>
        </DefaultContainer>
        </>
    );
};

export default Register;