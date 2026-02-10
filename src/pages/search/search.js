import React, { useState, useEffect, useRef } from "react";
import { Container, Heading, LogoTitleContainer, SearchBoxContainer, SearchComponents, SecondaryButtonsContainer, ContentHeadingContainer, ContentHeadingText, OverlayContentContainer, OverlayContentItem } from "./styles";
import { ReactComponent as Logo } from "../../icons/PanodimeAILogo.svg";
import GoButton from "../../components/buttons/go/go";
import { ReactComponent as GoIcon } from "../../icons/RightArrowWhite.svg";
import SecondaryButton from "../../components/buttons/secondary/secondary";
import { ReactComponent as PopularIcon } from "../../icons/megaphone.svg";
import Overlay from "../../components/overlay/overlay";
import { commonConcerns } from "../../utils/searches";

const Search = () => {
    const [commonConcernsOpen, setCommonConcernsOpen] = useState(false);
    const buttonRef = useRef(null);

    const openCommonConcerns = () => {
        console.log("opening overlay");
        setCommonConcernsOpen(true);
    }

    const OverlayContentHeading = ({ text }) => {
        return (
            <ContentHeadingContainer>
                <PopularIcon height={20} width={20} fillOpacity={0.75} />
                <ContentHeadingText>{text}</ContentHeadingText>
            </ContentHeadingContainer>
        )
    }

    const OverlayContent = () => {
        return (
            <OverlayContentContainer>
                {commonConcerns.map((concern, index) => (
                    <OverlayContentItem isLast={index === commonConcerns.length - 1} key={index}>{concern}</OverlayContentItem>
                ))}
            </OverlayContentContainer>
        )
    }

    return (
        <Container>
            <SearchComponents>
                <LogoTitleContainer>
                    <Logo height={80} width={80} />
                    <Heading>Protect your rights from AI</Heading>
                </LogoTitleContainer>
                <SearchBoxContainer>
                    <input type="text" placeholder="What are your concerns about AI?" style={{ border: "none", outline: "none", fontSize: "18px", width: "400px" }} />
                    <GoButton icon={<GoIcon height={10} width={30} />} />
                </SearchBoxContainer>
                <SecondaryButtonsContainer ref={buttonRef}>
                    <SecondaryButton onClick={openCommonConcerns} icon={<PopularIcon height={20} width={20} fillOpacity={0.75} />} text="Common concerns" />
                </SecondaryButtonsContainer>
            </SearchComponents>
            <Overlay buttonRef={buttonRef} isOpen={commonConcernsOpen} onClose={() => setCommonConcernsOpen(false)} width="500px" heading={OverlayContentHeading({ text: "Common concerns" })}>
                <OverlayContent />
            </Overlay>

        </Container>
    )
}

export default Search;