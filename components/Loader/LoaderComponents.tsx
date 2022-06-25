import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgb(230, 230, 230);
`;
const rotate = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const LoaderComponent = styled.div`
    border: 16px solid rgb(150, 150, 150);
    border-radius: 50%;
    border-top: 16px solid rgb(0, 0, 0);
    width: 150px;
    height: 150px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 20px;
    animation: ${rotate} 1.2s ease-in-out infinite;
`;
