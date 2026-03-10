import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    background-color: ${colors.background};
    display: flex;
    height: 100vh;
`;


export const Sidebar = styled.aside`
//   width: 260px;
  background-color: ${colors.background};
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
`;

export const SidebarHeader = styled.div`
  padding: 16px;
`;

export const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #191919;
`;

export const NewChatButton = styled.button`
//   width: 100%;
//   padding: 10px;
  background-color: ${colors.light_purple};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  padding: 10px 0px;
  font-size: 20px;

  &:hover {
    background-color: ${colors.light_purple_hover};

  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  min-width: 0; // Add this
  overflow: hidden; // Add this
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  max-width: 100vw; // Add this to prevent viewport expansion
  box-sizing: border-box; // Add this
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  margin-bottom: 16px;
  width: 100%;
  min-width: 0; // Add this
`;

export const Message = styled.div`
  max-width: ${props => props.$isUser ? '70%' : '100%'};
  width: ${props => props.$isUser ? 'auto' : '100%'};
  min-width: 0; // Add this - critical for proper overflow
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${props => props.$isUser ? colors.light_purple : 'transparent'};
  color: ${props => props.$isUser ? 'black' : '#191919'};
  overflow: hidden;
`;

export const MessageContent = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 15px;
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 4px;

  span {
    width: 8px;
    height: 8px;
    background-color: #999;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export const InputContainer = styled.div`
  padding: 16px 24px 24px;
  border-top: 1px solid #e5e5e5;
`;

export const InputForm = styled.form`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 56px 14px 16px;
  font-size: 15px;
  border: 1px solid #d4d4d4;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #a855f7;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SendButton = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.disabled ? '#e5e5e5' : colors.purple};
  color: white;
  font-size: 18px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #9333ea;
  }
`;