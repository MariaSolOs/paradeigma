import { styled } from '@mui/material/styles';

import MuiMasonry from '@mui/lab/Masonry';

export const Masonry = styled(MuiMasonry)(({ theme }) => ({
    width: '85vw',
    maxWidth: 1100,
    margin: '50px auto',
    
    [theme.breakpoints.down('md')]: {
        width: '90vw',
        margin: '30px auto'
    }
}));

export const SnippetContainer = styled('div')(({ theme }) => ({
    fontSize: '0.9rem',

    [theme.breakpoints.down('lg')]: { fontSize: '0.8rem' },
    [theme.breakpoints.down('md')]: { fontSize: '0.75rem' }
}));