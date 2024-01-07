import { Button } from "@mui/material";
import { ThemeProvider, useTheme } from '@mui/material/styles';

export default function Banner() {
    const theme = useTheme();
    return (
        <>
            <ThemeProvider theme={theme}>
                <section id="banner">
                    <header>
                        <h2>Deckbuilding Powered by AI</h2>
                        <p style={{ color: theme.palette.secondary.main }}>Discover the magic of deck building with MTGaiden, your ultimate AI-powered Magic: The Gathering assistant. Start crafting your unbeatable deck now!</p>
                        <span><Button variant="contained" color="secondary">Get Started</Button></span>
                    </header>
                </section>
            </ThemeProvider>
        </>
    )
};