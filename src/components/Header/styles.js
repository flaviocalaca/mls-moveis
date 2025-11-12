import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.$changerBackground ? "#000000" : "transparent"};
  transition: background-color 0.6s ease-in-out;

  img {
    width: 30%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
`;

export const Li = styled.li`
  position: relative;
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  a {
    text-decoration: none;
    color: #fff;
  }
  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$active ? "100%" : "0")};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff0000;
    transition: width 0.5s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;
