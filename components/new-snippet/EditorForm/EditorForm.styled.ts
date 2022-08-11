import { styled } from '@mui/material/styles';

export const FormContainer = styled('div')(({ theme }) => ({
    width: '95vw',
    maxWidth: '1200px',
    margin: '0 auto 30px',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: { flexDirection: 'column' }
}));

export const FormLabel = styled('label')(({ theme }) => ({
    fontFamily: 'inherit',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: theme.palette.primary.main,
    margin: '4px 0 0 0',
    display: 'inline-flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: { fontSize: '0.75rem' }
}));