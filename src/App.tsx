import { CssBaseline } from '@mui/material';
import { BoxContainer, Container, GlobalStyle, theme } from './globalStyle';
import { Home } from './pages/Home';
import { ThemeProvider } from '@mui/material/styles'
import { Main } from './pages/Main';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AppRouter } from './components/Router';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <div className="App">
                <Container>
                    <BoxContainer>
                        <AppRouter />
                    </BoxContainer>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
