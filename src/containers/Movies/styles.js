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
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
// ...existing code...
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  height: 100%;
  max-width: 1500px;
  width: 100%; /* <-- garante espaço disponível para space-between */
  padding: 0 20px;
`;
// ...existing code...
export const Info = styled.div`
  z-index: 2;
  padding-left: 50px;
  width: 50%;
  flex: 1; /* <-- torna o filho flexível */
  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #fff;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;
// ...existing code...
export const Poster = styled.div`
  z-index: 2;
  width: 50%;
  flex: 1; /* <-- torna o filho flexível */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 300px;
    border-radius: 30px;
    animation: ${scale} 0.4s ease-out;
  }
`;
export const ContainerButtons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;
