import styled, { css } from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;


  transition: opacity 1.5s ease-in-out;


  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
      z-index: 2;
    `}
`;
