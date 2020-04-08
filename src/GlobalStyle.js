import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    *{
        box-sizing:border-box;
        outline:none;
        margin:0;
        padding:0;
        -webkit-tap-highlight-color: transparent;
    }
    html,body{
        margin:0;
        padding:0;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
         user-select: none;
         font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }
    #root {
        min-height:100vh;
        height:100vh;
    }

    .ScrollbarHide{
                /* width */
        ::-webkit-scrollbar {
            display:none;
        }
    }

    .Scrollbar{
                /* width */
        ::-webkit-scrollbar {
            display:block;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
        }
    }
`

export default GlobalStyle;