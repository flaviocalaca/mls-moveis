import styled, { keyframes } from "styled-components";

const scale = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #000000, transparent);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1200px;
  margin-top: -100px;
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;
  animation: ${scale} 0.5s ease-in-out;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }
`;

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
  }
  p {
    font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
  }

  iframe {
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #000;
    border: none;
  }
`;
