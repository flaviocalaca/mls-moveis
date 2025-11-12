import styled, { css } from "styled-components";

const buttonStyles = css`
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  transition: all 0.3s;
  letter-spacing: 2px;

  &:hover {
    color: white;
    color: #ff0000;
  }
`;
export const ButtonWhite = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}

  background-color: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
    background: #ff0000;
    color: #fff;
  }
`;
