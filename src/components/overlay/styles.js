import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`;

export const Content = styled.div`
  background: white;
  border-radius: 15px;
  padding: 10px;
  position: fixed;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.10);
  pointer-events: auto;
  margin: 0 20px;
  width: 627px !important;
`;

export const CloseButton = styled.button`
//   position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  line-height: 1;

  &:hover {
    color: #000;
  }
`;

export const ContentHeading = styled.div`
    display: flex;
    justify-content: space-between;
    // padding: 10px;
    padding-right: 8px;
    padding-left: 5px;
`;