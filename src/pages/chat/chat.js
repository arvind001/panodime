import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { Container, Sidebar, SidebarHeader, LoadingDots, NewChatButton, Main, MessagesContainer, MessageWrapper, Message, MessageContent, InputContainer, InputForm, Input, SendButton } from "./styles";
import { ReactComponent as Logo } from "../../icons/PanodimeAILogo.svg";
import Result from "../../modules/result/result";

const Chat = () => {
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const hasProcessedInitialMessage = useRef(false);

    useEffect(() => {
        // Only process if we haven't already and there's an initial message
        if (location.state?.initialMessage && !hasProcessedInitialMessage.current) {
            hasProcessedInitialMessage.current = true; // Mark as processed
            handleSendMessage(location.state.initialMessage);
        }
    }, [location.state?.initialMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (text) => {
        const userMessage = text || input;
        if (!userMessage.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                component: <Result />, // Render the Result component for assistant messages
                // content: 'This is a simulated response from Claude.'
            }]);
            setIsLoading(false);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage();
    };

    return (
        <Container>
            <Sidebar>

                <Logo height={40} width={40} />


                <NewChatButton>+</NewChatButton>
            </Sidebar>

            <Main>
                <MessagesContainer>
                    {messages.map((message, index) => (
                        <MessageWrapper key={index} $isUser={message.role === 'user'}>
                            <Message $isUser={message.role === 'user'}>
                                {message.component ? (
                                    message.component
                                ) : (
                                    <MessageContent>{message.content}</MessageContent>
                                )}
                            </Message>
                        </MessageWrapper>
                    ))}
                    {isLoading && (
                        <MessageWrapper $isUser={false}>
                            <Message $isUser={false}>
                                <LoadingDots>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </LoadingDots>
                            </Message>
                        </MessageWrapper>
                    )}
                    <div ref={messagesEndRef} />
                </MessagesContainer>

                <InputContainer>
                    <InputForm onSubmit={handleSubmit}>
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Reply to Claude..."
                            disabled={isLoading}
                        />
                        <SendButton type="submit" disabled={!input.trim() || isLoading}>
                            →
                        </SendButton>
                    </InputForm>
                </InputContainer>
            </Main>
        </Container>
    )
}

export default Chat;