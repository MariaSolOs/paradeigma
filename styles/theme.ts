import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#6FFFE9',
            main: '#5BC0BE'
        },

        secondary: {
            light: '#3A506B',
            main: '#1C2541',
            dark: '#0B132B'
        }
    },
    
    typography: {
        bungee: {
            fontFamily: 'Bungee Shade, cursive'
        },

        mono: {
            fontFamily: 'PT Mono, monospace'
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    font-family: PT Mono, monospace;
                }
            `
        },
        MuiSkeleton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    background: `${theme.palette.primary.main}20` // Use a 20% opacity
                })
            }
        }
    }
});

export default theme;