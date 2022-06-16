import styled from "styled-components";

export const Form = styled.form`
    width: 80%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 10% 5%;
    position: relative;
    border-radius: 10px;
    margin: 4rem 0;
    @media (min-width: 768px) {
        width: 60%;
    }
    @media (min-width: 920px) {
        width: 40%;
    }
    @media (min-width: 1200px) {
        width: 30%;
        padding: 5%;
    }
`;
export const Label = styled.label`
    opacity: 1;
    color: black;
    font-size: 18px;
    padding-bottom: 5px;
`;
export const Input = styled.input`
    height: 40px;
    padding: 0 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid rgb(35, 35, 35);
`;
export const LabelinputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3% 0;
`;
export const Button = styled.button`
    margin-top: 3%;
    width: 130px;
    border-radius: 10px;
    border: none;
    color: white;
    background: black;
    height: 45px;
    letter-spacing: 1px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.235rem;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3%;
`;

export const Message = styled.p`
    background: darkred;
    color: white;
    padding: 5px 10px;
    font-size: 18px;
    margin-top: 6%;
    font-weight: 700;
`;
