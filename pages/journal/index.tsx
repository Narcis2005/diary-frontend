import JournalComponent from "../../components/JournalComponent";
import DefaultContainer from "../../containers/DefaultContaienr";

const Journal = () => {
    return (
        <>
        <DefaultContainer>
            <JournalComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor enim eu dui pellentesque faucibus. Praesent viverra semper arcu nec viverra. Aliquam vehicula suscipit arcu, vitae ornare quam ullamcorper consequat. Maecenas id augue nec leo auctor egestas. Vivamus rhoncus neque vel orci dictum, quis dignissim velit volutpat. In ligula tortor, feugiat at aliquam a, porttitor nec erat. Praesent sit amet arcu ut tortor placerat ullamcorper. Praesent in sollicitudin purus, a egestas sem. Suspendisse ut leo turpis. Morbi scelerisque arcu ac nisi imperdiet, eu viverra leo luctus. Cras rutrum ac mauris ac euismod. Duis neque nisl, consectetur at lacus vitae, interdum tempor augue. Sed vitae semper nisl, facilisis aliquam lacus."/>
        </DefaultContainer>
        </>
    );
};

export default Journal;