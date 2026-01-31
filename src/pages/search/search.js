import React, { useState, useEffect } from "react";
import { Container, Heading, LogoTitleContainer, SearchBoxContainer, SearchComponents } from "./styles";
import { ReactComponent as Logo } from "../../icons/PanodimeAILogo.svg";

const Search = () => {
    return (
        <Container>
            <SearchComponents>
                <LogoTitleContainer>
                    <Logo />
                    <Heading>Defend yourself against AI</Heading>
                </LogoTitleContainer>
                <SearchBoxContainer />
            </SearchComponents>


        </Container>
    )
}

export default Search;