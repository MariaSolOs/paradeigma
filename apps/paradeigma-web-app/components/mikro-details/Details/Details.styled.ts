import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px auto 50px',

    [theme.breakpoints.down('md')]: { flexDirection: 'column' }
}));

export const MikroContainer = styled('div')(({ theme }) => ({
    width: '48%',
    height: 'fit-content',
    borderRadius: +theme.shape.borderRadius * 2,
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: 30,
        fontSize: '0.8rem'
    }
}));

export const TextContainer = styled('div')(({ theme }) => ({
    width: '50%',
    borderRadius: +theme.shape.borderRadius * 2,
    border: `${theme.palette.secondary.light} solid 1px`,
    padding: '1rem',

    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));

export const LanguageIconContainer = styled('div')(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.light}50`,
    borderRadius: +theme.shape.borderRadius * 2,
    padding: '0.3rem',
    width: 'fit-content',
    marginLeft: 'auto'
}));

export const LanguageIcon = styled('i')(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '2.8rem',

    [theme.breakpoints.down('md')]: { fontSize: '2rem' }
}));

export const Name = styled('h2')(({ theme }) => ({
    textAlign: 'center',
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '2rem',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
        fontSize: '1.3rem'
    }
}));

export const Description = styled('p')(({ theme }) => ({
    fontSize: '1rem',

    [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem'
    }
}));