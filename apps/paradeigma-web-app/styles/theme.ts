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
    }
};

export default theme;
