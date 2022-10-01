import { styled } from '@mui/material/styles';

export const Slide = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '80vw',
    maxWidth: 1100,
    margin: '50px auto',
    
    [theme.breakpoints.down('md')]: {
        width: '90vw',
        margin: '30px auto'
    }
}));

export const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    minWidth: 230,
    minHeight: 230,

    [theme.breakpoints.down('md')]: {
        minWidth: 170,
        minHeight: 170
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: 100,
        minHeight: 100
    }
}));

export const TextContainer = styled('p')(({ theme }) => ({
    textAlign: 'center',
    margin: '0 20px',
    fontSize: '1.3rem',
    
    [theme.breakpoints.down('md')]: { fontSize: '1rem' },
    [theme.breakpoints.down('sm')]: { 
        margin: '0 10px',
        fontSize: '0.8rem' 
    }
}));

export const HighlightedText = styled('span')(({ theme }) => ({
    fontFamily: theme.typography.bungee.fontFamily
}));