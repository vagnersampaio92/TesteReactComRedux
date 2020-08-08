import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto' !important;
      

    }
    body{
        
        text-rendering: optimizeLegibility !important;
        margin: 0 ;
        height:100vh;
    }
    a{
        color:black !important;
        font-family: 'Roboto' !important;
    }
    
`;

export default GlobalStyle;