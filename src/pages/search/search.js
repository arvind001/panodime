import React, { useState, useEffect } from "react";
import { Container, Heading, LogoTitleContainer, SearchBoxContainer, SearchComponents } from "./styles";
import { ReactComponent as Logo } from "../../icons/PanodimeAILogo.svg";
import GoButton from "../../components/buttons/go/go";
import { ReactComponent as GoIcon } from "../../icons/RightArrowWhite.svg";

const Search = () => {
    return (
        <Container>
            <SearchComponents>
                <LogoTitleContainer>
                    <Logo />
                    <Heading>Defend yourself against AI</Heading>
                </LogoTitleContainer>
                <SearchBoxContainer>
                    <input type="text" placeholder="What are your concerns about AI?" style={{ border: "none", outline: "none", fontSize: "18px", width: "400px" }} />
                    <GoButton icon={<GoIcon height={20} width={50} />} />
                </SearchBoxContainer>
            </SearchComponents>


        </Container>
    )
}

export default Search;