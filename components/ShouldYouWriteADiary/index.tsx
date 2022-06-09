import {
    ShouldYouWriteADiaryContainer,
    TitleContainer,
    ShouldYouWriteADiaryTitle,
    ShouldYouWriteADiaryContentContainer,
    ShouldYouWriteADiaryContent,
} from "./components";

const ShouldYouWriteADiary = () => {
    return (
        <>
            <ShouldYouWriteADiaryContainer>
                <TitleContainer>
                    <ShouldYouWriteADiaryTitle>Should you write a diary?</ShouldYouWriteADiaryTitle>
                </TitleContainer>
                <ShouldYouWriteADiaryContentContainer>
                    <ShouldYouWriteADiaryContent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusantium labore accusamus
                        quibusdam illo repellendus at perferendis aperiam iusto, ipsa totam veritatis doloribus
                        dignissimos harum ab cupiditate provident aliquid numquam perspiciatis eius laborum. Amet eaque
                        sequi illum, fuga quis est voluptatum distinctio recusandae assumenda praesentium sint a
                        voluptatem et minus.
                    </ShouldYouWriteADiaryContent>
                </ShouldYouWriteADiaryContentContainer>
            </ShouldYouWriteADiaryContainer>
        </>
    );
};

export default ShouldYouWriteADiary;
