import type { MantineThemeOverride } from '@mantine/core';

// TODO: Is there a way to add this to the theme?
export const BUNGEE_SHADE_FONT_FAMILY = 'Bungee Shade, cursive';

const theme: MantineThemeOverride = {
    colors: {
        'paradeigma-cyan': [
            '#DFFBFB',
            '#C1ECEA',
            '#9FDDDB',
            '#7CCDCC',
            '#59BFBD',
            '#40A6A4',
            '#2F817F',
            '#1C5D5C',
            '#083838',
            '#001515'
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
