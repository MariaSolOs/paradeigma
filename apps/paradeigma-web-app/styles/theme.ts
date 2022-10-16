import type {} from '@mui/lab/themeAugmentation'; // Module augmentation for the lab components
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
            fontFamily: 'Bungee, cursive'
        },

        bungeeShade: {
            fontFamily: 'Bungee Shade, cursive'
        },

        mono: {
            fontFamily: 'PT Mono, monospace'
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: theme => `
                body {
                    font-family: ${theme.typography.mono.fontFamily ?? 'monospace'};
                }
            `
        },
        MuiSkeleton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: `${theme.palette.primary.main}20`
                })
            }
        },
        MuiChip: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontFamily: 'inherit',
                    height: '1.6rem',
                    backgroundColor: `${theme.palette.secondary.light}30`,
                    color: theme.palette.secondary.main
                }),
                deleteIcon: {
                    transition: 'color 300ms ease-in-out'
                }
            }
        }
    }
});

export default theme;