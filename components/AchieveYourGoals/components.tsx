import Image from "next/image";
import styled from "styled-components";

export const AchieveYourGoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    background: rgb(245, 245, 245);
    @media (min-width: 920px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 4rem 10%;

    }
`;
export const AchieveYourGoalsTextContainer = styled.div`
     @media (min-width: 920px) {
        width: 30%;
        text-align: right;
    }
`;

export const AchieveYourGoalsTitleContainer = styled.div`
    padding-bottom: 2rem;
`;

export const AchieveYourGoalsTitle = styled.h3`
    font-size: 2.5rem;
`;
export const AchieveYourGoalsContentContainer = styled.div`

`;
export const AchieveYourGoalsContent = styled.p`
    opacity: 0.8;
    line-height: 1.8rem;
`;

export const AchieveYourGoalsIllustrationContainer = styled.div`
    width: 80%;
@media (min-width: 920px) {
    width: 45%;

}
`;
export const AchieveYourGoalsImageContainer = styled.div`
    width: 100%;
`;
export const AchieveYourGoalsIllustration = styled(Image)`

`;