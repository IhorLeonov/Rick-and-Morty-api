import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

@font-face {
  src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  src: url("/fonts/Roboto/Roboto-Medium.ttf") format("truetype");
 
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  src: url("/fonts/Roboto/Roboto-Bold.ttf") format("truetype");
 
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  src: url("/fonts/Roboto/Roboto-Black.ttf") format("truetype");

  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
}

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  /* display: flex;
  margin-left: auto;
  margin-right: auto; */
  
  min-width: 320px;
  max-width: 1440px;
  min-height: 100vh;
  
  font-family: Roboto;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  /* border: 1px solid transparent; */
  border: none;
  border-radius: 4px;
  /* padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500; */
  font-family: inherit;
  cursor: pointer;
}
`;
