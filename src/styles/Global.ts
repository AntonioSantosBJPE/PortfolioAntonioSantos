import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
  }

  ul{
    list-style-type: none;
  }

  a{
      text-decoration: none;
  }
  
:root {
  --color-primary:#C778DD;
  /* --color-primary-hover: #ae3bce; */
  --color-primary-hover: rgba(199, 120, 221, 0.2);
  --color-primary-disableb: #7b2492;
  --color-gray-0: #FFFFFF;
  --color-gray-1: #ABB2BF;
  --color-gray-1-hover: rgba(171, 178, 191, 0.2);
  --color-gray-2: #282C33 ;
  --color-gray-3: #000000;
  --color-sucess: #168821;
  --color-negative: #E60000;
  --color-warning: #FFCD07;
  --color-information: #155BCB;
  --swiper-theme-color:#C778DD;
}

body{
  background-color: var(--color-gray-2);
}


`;
