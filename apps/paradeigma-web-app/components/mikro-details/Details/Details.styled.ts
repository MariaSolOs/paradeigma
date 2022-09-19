import { styled } from '@mui/material/styles';

export const Container = styled('div')(() => ({
// export const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '85vw',
    margin: '0 auto'
}));

export const MikroContainer = styled('div')(() => ({
// export const MikroContainer = styled('div')(({ theme }) => ({
    width: '50%'
}));

export const TextContainer = styled('div')(() => ({
// export const TextContainer = styled('div')(({ theme }) => ({
    width: '45%'
}));

export const Name = styled('h2')(({ theme }) => ({
    textAlign: 'center',
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '2.8rem',
    margin: '0.5rem auto'
}));

export const Description = styled('p')(() => ({
// export const Description = styled('p')(({ theme }) => ({
    fontSize: '1.2rem'
}));