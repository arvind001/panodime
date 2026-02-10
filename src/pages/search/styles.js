import styled from "styled-components";
import SecondaryButton from "../../components/buttons/secondary/secondary";

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
    height: 50px;
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

export const SecondaryButtonsContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
`;

export const ContentHeadingContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    padding-right: 8px;
    padding-bottom: 10px;
    opacity: 0.5
`;

export const ContentHeadingText = styled.div`

    font-size: 12px;
    
`;

export const OverlayContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const OverlayContentItem = styled.div`
    border-bottom: ${props => props.isLast ? "none" : "1px solid rgba(0, 0, 0, 0.10)"};
    padding: 5px 0px;
    padding-left: 5px;
    font-size: 12px;
    display: flex;
    justify-content: start;
    cursor: pointer;
    &:hover {
        background-color: rgba(145, 38, 166, 0.1);
        border-radius: 5px;
        border-bottom: 1px solid transparent;
    }
`;

