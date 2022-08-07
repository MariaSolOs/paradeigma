import { styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

export const InputField = styled(InputBase)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: +theme.shape.borderRadius * 2,
    padding: '4px 8px',
    fontFamily: theme.typography.mono.fontFamily,
    color: theme.palette.primary.dark,

    '& ::placeholder': { fontSize: '0.9rem' },

    [theme.breakpoints.down('sm')]: { 
        fontSize: '0.8rem',

        '& ::placeholder': { fontSize: '0.8rem' }
    }
}));