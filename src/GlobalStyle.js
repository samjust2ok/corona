import { createGlobalStyle, keyframes } from 'styled-components';
import { devices } from './utils/styledUtils';

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
         font-family: 'Poppins', sans-serif;
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
            overflow:hidden;
            overflow-y:scroll;
                /* width */
        ::-webkit-scrollbar {
            display:block;
            width:3px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color:inherit;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
        width: 5px;
        background-color:rgba(0,0,0,.3);
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        
        }

        ${devices.mobileXL`

            ::-webkit-scrollbar {
                width:5px;
            }
            ::-webkit-scrollbar-track {
                background-color:rgba(0,0,0,.1);
            }
        `}
    }
`

export default GlobalStyle;