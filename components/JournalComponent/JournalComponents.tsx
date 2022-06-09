import styled from "styled-components";

export const JournalContainer = styled.div`
    display: flex;
    
    justify-content: center;
    width: 100%;
    padding: 4rem 0;
`;
export const PagesContainer = styled.div`
    width: 65%;
`;
export const SidebarContainer = styled.div`
    width: 15%;
    margin-right: 5%;
    background: rgb(130,130,130);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self:flex-start;
    padding: 30px;
    text-align: center;
    color: white;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 10px 20px;

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
 background: linear-gradient(to bottom,white 39px,black 1px);
 background-size: 100% 40px;
 padding: 2px 10px;
 border: none;
 resize: none;
 outline: none;
 padding: 8px 20px;
 font-size: 1.3rem;
    &:focus{
        border: none;
    }
`;
export const InfoContainerJournal = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    padding-bottom: 1rem;
`;
export const WrritenByJournal = styled.h3`

`;
export const WrritenAtJournal = styled.p`

`;
export const SmallIndicativePageContainer = styled.div`
    height: 200px;
    width: 130px;
    margin-bottom: 2.5rem;
`;

export const SmallIndicativePageBackground = styled.input`
    width: 100%;
    height: 80%;
    background: linear-gradient(to bottom,white 9px,black 1px);
    background-size: 100% 10px;
    margin-bottom: 20px;
    position: relative;
    z-index:2;
    transform-style: preserve-3d;
    appearance: none;
    &::after{
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
    &:checked::after{
        border: solid 6px black;
        top: calc(-2.5% - 6px);
        left: calc(-5% - 6px);
        border-radius: 5px;
    }

`;

export const SmallIndicativePageNumber = styled.p`
    font-size: 20px;
    font-weight: 700;
`;