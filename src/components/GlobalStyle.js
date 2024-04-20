import { createGlobalStyle } from "styled-components";
import 'modern-normalize';
import GilroyMediumTtf from '../fonts/Gilroy-Medium.ttf';
import GilroyMediumWoff from '../fonts/Gilroy-Medium.woff';
import GilroyMediumEot from '../fonts/Gilroy-Medium.eot';
import GilroyBoltTtf from '../fonts/Gilroy-Bold.ttf';
import GilroyBoltWoff from '../fonts/Gilroy-Bold.woff';
import GilroyBoltEot from '../fonts/Gilroy-Bold.eot';


export const GlobalStyle = createGlobalStyle`

:root{
        
    }

    @font-face {
  font-family: 'Gilroy-Bolt';
  src: local('Giroy-Bolt'), url(${GilroyBoltTtf} format('ttf'), url(${GilroyBoltWoff}) format('woff')url(${GilroyBoltEot}) format('eot');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy-Medium';
  src: local('Giroy-Medium'), url(${GilroyMediumTtf} format('ttf'), url(${GilroyMediumWoff}) format('woff')url(${GilroyMediumEot}) format('eot');
  font-weight: 500;
  font-style: normal;
}



body {
  margin: 0 auto;
  min-width: 100%;
  font-family: "Gilroy", sans-serif;
  font-weight:400;
   background-color:${({theme})=>theme.colors.primaryBgColor};

  
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 0;
}
button{
  border:transparent;
  cursor:pointer;
}
`
