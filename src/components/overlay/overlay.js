import { useRef, useEffect, useState } from "react";
import { Backdrop, CloseButton, Content, ContentHeading } from "./styles";

const Overlay = ({ isOpen, onClose, width, height, buttonRef, children, heading }) => {
    const overlayRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        console.log('useEffect triggered');
        console.log('isOpen:', isOpen);
        console.log('buttonRef.current:', buttonRef.current);
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            console.log('Button rect:', rect);
            console.log('Calculated position:', {
                top: rect.bottom + 10,
                left: rect.left
            });
            setPosition({
                top: rect.bottom + window.scrollY - 32, // 10px below button
                left: rect.left + window.scrollX // align left edges
            });
        }
    }, [isOpen, buttonRef]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (overlayRef.current && !overlayRef.current.contains(e.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <Backdrop>
            <Content ref={overlayRef} style={{ width, height, top: `${position.top}px`, left: `${position.left}px` }}>
                <ContentHeading>
                    {heading}
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </ContentHeading>
                {children}
            </Content>
        </Backdrop>
    )
}

export default Overlay;