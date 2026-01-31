import styled from "styled-components";

export const Container = styled.div`
    background-color: #FEFBFF;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 0px 30px;
`;

export const Heading = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 40px;
    font-weight: 700;
`;

export const SearchBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-radius: 10px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
`;

export const SearchComponents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;