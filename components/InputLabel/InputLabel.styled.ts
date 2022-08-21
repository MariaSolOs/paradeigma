import { styled } from '@mui/material/styles';

export const InputLabel = styled('label')(({ theme }) => ({
    fontFamily: 'inherit',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: theme.palette.primary.main,
    margin: '4px 0 0 0',
    display: 'inline-flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: { fontSize: '0.75rem' }
}));