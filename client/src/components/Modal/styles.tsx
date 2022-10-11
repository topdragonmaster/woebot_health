import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  outline: 0;
  padding: 15px 10px;
  min-width: 350px;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  font-size: 20px;
  border-bottom: 1px solid lightgrey;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: #2b2929;
`;

export const CloseButton = styled.button`
  font-size: 22px;
  border: none;
  border-radius: 3px;
  background: none;
  color: black;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 30px;
  text-align: center;
`;
