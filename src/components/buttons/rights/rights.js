import React from "react";
import { Container } from "./styles";

const Right = ({ result, selected, handleClick }) => {
    return (
        <Container selected={selected} onClick={handleClick}>
            {result.rightName}
        </Container>
    )
}

export default Right;