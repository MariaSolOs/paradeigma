import type { MantineThemeOverride } from '@mantine/core';

// TODO: Is there a way to add this to the theme?
export const BUNGEE_SHADE_FONT_FAMILY = 'Bungee Shade, cursive';

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
                    backgroundColor: `${theme.colors['paradeigma-cyan'][1]}`,
                    border: 'none',
                    paddingLeft: '1rem',
                    // Hide the color line
                    '&:before': { display: 'none' }
                },
                description: {
                    fontWeight: 'bold'
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
                    padding: '4px 0'
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
    }
};

export default theme;
