import { AboutTextContainer, TitleContainer, Title, ContentContainer, Content } from "./AboutTextComponents";

const AboutText = () => {
    return (
        <>
            <AboutTextContainer>
                <TitleContainer>
                    <Title>What is this about?</Title>
                </TitleContainer>
                <ContentContainer>
                    <Content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, numquam quam accusamus repudiandae veritatis provident cupiditate earum iste in adipisci illo? Ut totam omnis inventore sint aspernatur eum ipsam odit, consectetur impedit cumque quibusdam excepturi perspiciatis earum hic iure vitae suscipit deserunt maxime voluptas enim officiis ullam nobis ab numquam. Asperiores, dolores sapiente. Excepturi provident, obcaecati aliquid, delectus repellat quaerat deserunt officia vitae asperiores laboriosam tempore, sapiente beatae commodi ex deleniti ipsam debitis perferendis rem incidunt quae. Hic, incidunt explicabo!</Content>
                </ContentContainer>
            </AboutTextContainer>
        </>
    );
};

export default AboutText;