import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
    display: flex;
    padding: 10px;
    background-color: ${props => props.selected ? colors.purple : colors.white};
    box-shadow: ${props => props.selected ? 'none' : '0px 4px 20px 0px rgba(0, 0, 0, 0.1)'};
    color: ${props => props.selected ? colors.white : colors.black};
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    min-width: 200px;  // Changed from max-width to min-width
    flex-shrink: 0;    // Prevent shrinking
    white-space: nowrap; // Prevent text wrapping
    cursor: ${props => props.selected ? 'default' : 'pointer'};
`;