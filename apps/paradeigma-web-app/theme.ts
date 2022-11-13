import type { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
    colors: {
        'paradeigma-cyan': [
            '#DBFFFC',
            '#AFFFF3',
            '#80FFEC',
            '#51FFE4',
            '#2EFEDC',
            '#1FE5C2',
            '#0FB397',
            '#00806C',
            '#004D41',
            '#001C16'
        ],
        'paradeigma-blue': [
            '#E7EEFF',
            '#CAD3E8',
            '#ABB8D3',
            '#8B9EC0',
            '#6B85AD',
            '#526D94',
            '#3F5774',
            '#2C3B54',
            '#182135',
            '#040818'
        ]
    },
    fontFamily: 'PT Mono, monospace',
    headings: {
        fontFamily: 'Bungee, cursive'
    },
    components: {
        Notification: {
            styles: (theme) => ({
                root: {
                    backgroundColor: `${theme.colors['paradeigma-blue'][1]}`,
                    border: 'none',
                    padding: '8px 5px'
                },
                description: {
                    fontWeight: 'bold'
                },
                icon: {
                    backgroundColor: `${theme.colors['paradeigma-blue'][2]} !important`,
                    color: `${theme.colors['paradeigma-blue'][7]} !important`,
                    width: 35,
                    height: 35
                },
                closeButton: {
                    transition: 'color 300ms ease-in-out',
                    '&:hover': {
                        backgroundColor: `${theme.colors['paradeigma-blue'][1]}`,
                        color: theme.black
                    }
                }
            })
        },
        Input: {
            styles: (theme) => ({
                input: {
                    border: `1px solid ${theme.colors['paradeigma-cyan'][2]}`,
                    borderRadius: theme.radius.md,
                    color: theme.colors['paradeigma-cyan'][8],
                    transition: 'border 300ms ease-in-out',
                    '&:focus': {
                        border: `1.75px solid ${theme.colors['paradeigma-cyan'][2]}`
                    }
                }
            })
        },
        Select: {
            styles: (theme) => ({
                dropdown: {
                    boxShadow: 'none',
                    border: `1px dashed ${theme.colors['paradeigma-cyan'][2]}`
                },
                item: {
                    textAlign: 'center',
                    padding: '4px 0',
                    '&:hover, &[data-selected], &[data-selected]:hover, &[data-hovered]': {
                        fontWeight: 'bold',
                        color: theme.black,
                        backgroundColor: `${theme.colors['paradeigma-blue'][0]}70`
                    }
                }
            })
        },
        MultiSelect: {
            styles: (theme) => ({
                input: {
                    '&:focus, &:focus-within': {
                        border: `1.75px solid ${theme.colors['paradeigma-cyan'][2]}`
                    }
                },
                dropdown: {
                    boxShadow: 'none',
                    border: `1px dashed ${theme.colors['paradeigma-cyan'][2]}`
                },
                item: {
                    textAlign: 'center',
                    padding: '4px 0',
                    '&:hover, &[data-hovered]': {
                        fontWeight: 'bold',
                        backgroundColor: `${theme.colors['paradeigma-blue'][0]}70`
                    }
                },
                value: {
                    backgroundColor: `${theme.colors['paradeigma-blue'][0]}70`
                }
            })
        },
        Skeleton: {
            styles: (theme) => ({
                visible: {
                    '&::after': {
                        backgroundColor: theme.colors['paradeigma-blue'][0]
                    }
                }
            })
        }
    },
    other: {
        additionalFonts: {
            bungeeShade: 'Bungee Shade, cursive'
        }
    }
};

export default theme;
