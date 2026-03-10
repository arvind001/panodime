import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    max-width: 100%; // Add this
`

export const RightsButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    
    // Thin, auto-hiding scrollbar (macOS style)
    &::-webkit-scrollbar {
        height: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.4);
    }
    
    // For Firefox - thin auto-hiding scrollbar
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`

export const ResultHeader = styled.h2`
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: ${colors.black};
    margin-bottom: 16px;
`
