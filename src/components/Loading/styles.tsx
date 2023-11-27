import styled from "styled-components";

export const BackgroundLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`

export const AnimationContainer = styled.div`
  width: 15vh;
  height: 15vh;
  border-radius: 15px;
  background-color: teal; 
  display: flex;
  justify-content: center;
  align-items: center;
`