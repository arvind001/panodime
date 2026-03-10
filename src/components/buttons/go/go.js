import React from "react";
import { Container } from "./styles";

const GoButton = ({ icon, handleClick }) => {
    return <Container onClick={handleClick}>{icon}</Container>;
}

export default GoButton;