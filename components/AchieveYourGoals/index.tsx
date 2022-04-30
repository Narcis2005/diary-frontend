import { AchieveYourGoalsContainer, AchieveYourGoalsTextContainer, AchieveYourGoalsTitleContainer, AchieveYourGoalsTitle, AchieveYourGoalsContentContainer, AchieveYourGoalsContent, AchieveYourGoalsIllustrationContainer, AchieveYourGoalsIllustration, AchieveYourGoalsImageContainer } from "./components";

const AchieveYourGoals = () => {
    return (
        <>
            <AchieveYourGoalsContainer>
                <AchieveYourGoalsTextContainer>
                    <AchieveYourGoalsTitleContainer>
                        <AchieveYourGoalsTitle>Write and achieve your goals</AchieveYourGoalsTitle>
                    </AchieveYourGoalsTitleContainer>
                    <AchieveYourGoalsContentContainer>
                        <AchieveYourGoalsContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi sed voluptatum dignissimos laboriosam possimus reiciendis, vel nam, molestiae expedita dolorum iure eaque pariatur sint, officiis dolorem impedit consectetur ut libero ipsum minima error tempore rem. Earum id iste deleniti.</AchieveYourGoalsContent>
                    </AchieveYourGoalsContentContainer>
                </AchieveYourGoalsTextContainer>
                <AchieveYourGoalsIllustrationContainer>
                    <AchieveYourGoalsImageContainer>
                        <AchieveYourGoalsIllustration  src="/planetIllustration.svg" height="500" width="500" layout="responsive"/>
                    </AchieveYourGoalsImageContainer>
                </AchieveYourGoalsIllustrationContainer>
            </AchieveYourGoalsContainer>
        </>
    );
};

export default AchieveYourGoals;