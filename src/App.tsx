import { CssBaseline } from '@mui/material';
import { BoxContainer, Container, GlobalStyle, theme } from './globalStyle';
import { Home } from './pages/home';
import { ThemeProvider } from '@mui/material/styles'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <div className="App">
                <Container>
                    <BoxContainer>
                        <Home />
                    </BoxContainer>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
