import mui from '@mui/material/styles';
import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        bungee: React.CSSProperties;
        mono: React.CSSProperties;
    }
    
    interface TypographyVariantsOptions {
        bungee?: TypographyStyleOptions;
        mono?: TypographyStyleOptions;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        bungee: true;
        mono: true;
    }
}
