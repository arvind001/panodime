import React, { useState } from "react";
import { Container, RightsButtonsContainer, ResultHeader } from "./styles";
import Right from "../../components/buttons/rights/rights";

const Result = () => {
    const [selectedRight, setSelectedRight] = useState("Right to Privacy");

    const handleRightClick = (right) => {
        setSelectedRight(right);
    };

    return (
        <Container>
            <ResultHeader>Your rights being infringed upon:</ResultHeader>
            <RightsButtonsContainer>
                <Right result={{ rightName: "Right to Privacy" }} selected={selectedRight === "Right to Privacy"} handleClick={() => handleRightClick("Right to Privacy")} />
                <Right result={{ rightName: "Right to Freedom of Speech" }} selected={selectedRight === "Right to Freedom of Speech"} handleClick={() => handleRightClick("Right to Freedom of Speech")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
                <Right result={{ rightName: "Right to Privacy" }} selected={selectedRight === "Right to Privacy"} handleClick={() => handleRightClick("Right to Privacy")} />
                <Right result={{ rightName: "Right to Freedom of Speech" }} selected={selectedRight === "Right to Freedom of Speech"} handleClick={() => handleRightClick("Right to Freedom of Speech")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
                <Right result={{ rightName: "Right to Fair Trial" }} selected={selectedRight === "Right to Fair Trial"} handleClick={() => handleRightClick("Right to Fair Trial")} />
            </RightsButtonsContainer>
        </Container>
    )
}

export default Result;