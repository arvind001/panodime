import React from "react";
import { Container } from "./styles";

const SecondaryButton = ({ ref, onClick, icon, text }) => {
    return (
        <Container ref={ref} onClick={onClick}>
            {icon}
            <div>{text}</div>
        </Container>
    )
}

export default SecondaryButton;