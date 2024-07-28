import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;

    font-family: 'Gowun Dodum', sans-serif;
  }

  #root {
    height: 100%;
  }
`;
