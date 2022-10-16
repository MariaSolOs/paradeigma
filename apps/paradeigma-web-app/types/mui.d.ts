import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        bungee: React.CSSProperties;
        bungeeShade: React.CSSProperties;
        mono: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        bungee: TypographyStyleOptions;
        bungeeShade?: TypographyStyleOptions;
        mono?: TypographyStyleOptions;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        bungee: true;
        bungeeShade: true;
        mono: true;
    }
}
