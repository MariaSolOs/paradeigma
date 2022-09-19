import { styled } from '@mui/material/styles';

export const Title = styled('h1')(({ theme }) => ({
    fontFamily: theme.typography.bungeeShade.fontFamily,
    fontSize: '5.7rem',
    color: theme.palette.secondary.main,
    margin: '0 auto',
    textAlign: 'center',
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: { fontSize: '4.3rem' },

    [theme.breakpoints.down('sm')]: { fontSize: '2.5rem' }
}));