import styled from "styled-components";
import { Button } from "../FormComponents";

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
    height: 120vh;
    width: 100%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 20px;
    margin: 2rem 0;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    overflow: auto;
    overflow-x: hidden;
`;
export const TextAreaContainer = styled.div`
    height: 88%;
`;
export const Page = styled.textarea`
    /* max-height: 1000vh; */
    min-height: 100%;
    width: 100%;
    line-height: 40px;
    background: linear-gradient(to bottom, white 39px, black 1px);
    background-size: 100% 40px;
    border: none;
    resize: none;
    outline: none;
    padding: 8px 20px;
    font-size: 1.3rem;
    overflow: hidden;
    &:focus {
        border: none;
    }
    @media (max-width: 920px) {
        line-height: 30px;
        background: linear-gradient(to bottom, white 29px, black 1px);
        background-size: 100% 30px;
        font-size: 1.2rem;
        padding: 4px 10px;
    }
`;
export const InfoContainerJournal = styled.div`
    display: flex;
    width: 80%;
    margin-left: 10%;
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
    height: 70%;
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

export const SavebuttonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
export const SaveButton = styled(Button)`
    width: 150px;
`;
export const PageNumberContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;
export const PageNumber = styled.p`
    font-size: 1.5rem;
`;

export const DownloadButton = styled(Button)`
    width: 150px;
    background: white;
    color: black;
    border: solid 1px black;
    &:hover{
        background: rgb(230, 230, 230);
    }
`;
