import { styled } from '@mui/material/styles';

import MuiSnackbarContent, { snackbarContentClasses } from '@mui/material/SnackbarContent';

export const SnackbarContent = styled(MuiSnackbarContent)(({ theme }) => ({
    fontFamily: theme.typography.mono.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.secondary.light,
    
    [`&.${snackbarContentClasses.root}`]: { minWidth: 0 }
}));