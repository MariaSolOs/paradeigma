import { styled } from '@mui/material/styles';

export const Button = styled('button')(({ theme }) => ({
    backgroundColor: '#FFF',
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    fontFamily: theme.typography.mono.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '0.9rem',
    borderRadius: +theme.shape.borderRadius * 3,
    height: 42,
    padding: '4px 1rem',
    minWidth: 80,
    cursor: 'pointer',
    transition: 'all 300ms ease-in-out',

    '&:hover:not(:disabled)': {
        backgroundColor: theme.palette.secondary.main,
        color: '#FFF'
    },

    '&:disabled': {
        filter: 'brightness(70%)',
        cursor: 'not-allowed'
    },

    [theme.breakpoints.down('sm')]: { fontSize: '0.8rem' }
}));
