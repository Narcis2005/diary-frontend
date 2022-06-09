import styled from "styled-components";

export const JournalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 4rem 0;
`;
export const PageContainer = styled.div`
    padding: 20px;
    height: 130vh;
    width: 80%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 20px;
    margin: 2rem 0;

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