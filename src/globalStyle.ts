import { createTheme } from '@mui/material/styles';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
  
  body {
    font-family: 'Montserrat', sans-serif;
    color: #313;
  }
`;

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 48px 24px;
        background: linear-gradient(90deg, 
        #ffbbd0,
        #e1bee7,
        #d1c4f9,
        #ffbbd0,
        #e1bee7
    );
    background-size: 400% 400%;
    animation: rainbowAnimation 20s ease infinite;
    height: 100vh;
    width: 100%;

    @keyframes rainbowAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
    }
}
`

export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1098px;
    height: 100%;
    padding: 48px;
    background: rgba(255, 255, 255, 0.6); 
    border-radius: 12px; 
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.4); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
`
