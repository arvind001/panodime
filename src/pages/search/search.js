import React, { useState, useEffect, useRef } from "react";
import { Container, Heading, LogoTitleContainer, SearchBoxContainer, SearchComponents, SecondaryButtonsContainer, ContentHeadingContainer, ContentHeadingText, OverlayContentContainer, OverlayContentItem, ListItem, Arrow } from "./styles";
import { ReactComponent as Logo } from "../../icons/PanodimeAILogo.svg";
import GoButton from "../../components/buttons/go/go";
import { ReactComponent as GoIcon } from "../../icons/RightArrowWhite.svg";
import SecondaryButton from "../../components/buttons/secondary/secondary";
import { ReactComponent as PopularIcon } from "../../icons/megaphone.svg";
import { ReactComponent as RightChevron } from "../../icons/RightChevron.svg";
import Overlay from "../../components/overlay/overlay";
import { commonConcerns } from "../../utils/searches";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [commonConcernsOpen, setCommonConcernsOpen] = useState(false);
    const [hoveredConcern, setHoveredConcern] = useState("");
    const [placeholder, setPlaceholder] = useState("What are your concerns about AI?");
    const [input, setInput] = useState('');
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            // Navigate to chat with the initial message
            navigate('/chat', { state: { initialMessage: input } });
        }
    };

    const onClickConcern = (concern) => {
        setInput(concern);
        setPlaceholder(concern);
        setCommonConcernsOpen(false);
    }

    useEffect(() => {
        if (hoveredConcern) {
            setPlaceholder(hoveredConcern);
        } else {
            setPlaceholder("What are your concerns about AI?");
        }
    }, [hoveredConcern]);

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
                    <ListItem onClick={() => onClickConcern(concern)} isFirst={index === 0} isLast={index === commonConcerns.length - 1} key={index} onMouseEnter={() => setHoveredConcern(concern)}
                        onMouseLeave={() => setHoveredConcern("What are your concerns about AI?")}>
                        <span>{concern}</span>
                        <Arrow><RightChevron height={12} width={12} fillOpacity={0.75} /></Arrow>
                    </ListItem>
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
                    <input value={input} autoFocus
                        onChange={(e) => setInput(e.target.value)} type="text" placeholder={placeholder} style={{ border: "none", outline: "none", fontSize: "18px", width: "400px" }} />
                    <GoButton handleClick={handleSubmit} icon={<GoIcon height={10} width={30} />} />
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