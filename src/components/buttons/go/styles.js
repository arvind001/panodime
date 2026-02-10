import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;    
    height: 25px;
    width: 35px;
    border-radius: 5px;
    border: none;
    background-color: #A92CC2;
    cursor: pointer;
    &:hover {
        background-color: #9126A6;
    }
`;