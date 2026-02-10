import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    gap: 3px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    padding-right: 8px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: rgba(145, 38, 166, 0.1);
        border: 1px solid rgba(145, 38, 166, 0.1);
    }
`;