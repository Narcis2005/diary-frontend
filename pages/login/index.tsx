import { NextPage } from "next/types";
import BackgroundImage from "../../components/BackgroundImage";
import LoginComponent from "../../components/LoginComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

const Login: NextPage = () => {
    return (
        <>
            <DefaultContainer>
                <BackgroundImage>
                    <LoginComponent />
                </BackgroundImage>
            </DefaultContainer>
        </>
    );
};

export default Login;
