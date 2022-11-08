import type { DefaultMantineColor, Tuple } from '@mantine/core';

type ExtendedColors = 'paradeigma-cyan' | 'paradeigma-blue' | DefaultMantineColor;

declare module '@mantine/core' {
    interface MantineThemeColorsOverride {
        colors: Record<ExtendedColors, Tuple<string, 10>>;
    }

    interface MantineThemeOther {
        additionalFonts: {
            bungeeShade: string;
        };
    }
}
