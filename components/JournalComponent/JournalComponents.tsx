import styled from "styled-components";

export const JournalContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-evenly;
    width: 100%;
    padding: 4rem 0;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;

    }
`;
export const PagesContainer = styled.div`
    width: 65%;
    @media (max-width: 960px) {
        width: 80%;
        margin-top: 2rem;

    }
`;
interface ISidebarContainer {
    show: boolean;
}
export const SidebarContainer = styled.div<ISidebarContainer>`
    width: 15%;
    background: rgb(130, 130, 130);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    padding: 30px;
    text-align: center;
    color: white;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 10px 20px;
    height: 90vh;
    overflow: hidden;
    overflow-y: auto;
    position: sticky;
    top: 5vh;
    @media (max-width: 1050px) {
        width: 20%;
    }
    @media (max-width: 960px) {
        flex-direction: row;
        overflow: hidden;
        overflow-x: auto;
        height: 10rem;
        width: 85%;
        margin-left: 7.5%;
        top: ${({ show }) => (show ? "10px" : "-12rem")};
        transition: top 0.5s ease-in-out;
    }

`;
export const PageContainer = styled.div`
    padding: 20px;
    height: 130vh;
    width: 100%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 20px;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Page = styled.textarea`
    height: 100%;
    width: 100%;
    line-height: 40px;
    background: linear-gradient(to bottom, white 39px, black 1px);
    background-size: 100% 40px;
    padding: 2px 10px;
    border: none;
    resize: none;
    outline: none;
    padding: 8px 20px;
    font-size: 1.3rem;
    &:focus {
        border: none;
    }
`;
export const InfoContainerJournal = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    padding-bottom: 1rem;
`;
export const WrritenByJournal = styled.h3``;
export const WrritenAtJournal = styled.p``;
export const SmallIndicativePageContainer = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    position: relative;
    @media (max-width: 1200px) {
        height: 100px;
    }
    @media (max-width: 960px) {
        flex-direction: column;
        
    }
`;
export const IndicativePageForm = styled.form`
    width: 100%;
    @media (max-width: 960px) {
        display: flex;    
    }

`;
export const SmallIndicativePageBackground = styled.input`
    width: 50%;
    height:70%;
    background: linear-gradient(to bottom, white 9px, black 1px);
    background-size: 100% 10px;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    transform-style: preserve-3d;
    appearance: none;
    &::after {
        content: "";
        position: absolute;
        width: 110%;
        height: 110%;
        background: white;
        top: -2.5%;
        left: -5%;
        transform: translateZ(-1px);
        border-radius: 2px;
    }
    &:checked::after {
        border: solid 6px black;
        top: calc(-2.5% - 6px);
        left: calc(-5% - 6px);
        border-radius: 5px;
    }
    @media (max-width: 960px) {
        margin: 0 1rem 20px 1rem;
    width: 3rem;

    }
`;

export const SmallIndicativePageNumber = styled.p`
    font-size: 20px;
    font-weight: 700;
`;
