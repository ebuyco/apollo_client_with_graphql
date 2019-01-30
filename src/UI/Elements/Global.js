import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat', sans-serif;
  src: url('/static/Montserrat-Regular.ttf, Montserrat-SemiBold.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-family: 'Montserrat', sans-serif;
 
}

button {  font-family: 'Montserrat', sans-serif; }
`;

export default GlobalStyle;
