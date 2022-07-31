import { styled } from '@mui/material/styles';
import theme from 'styles/theme';

export const Title = styled('h1')({
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '5.5rem',
    color: theme.palette.secondary.main,
    margin: '0 auto',
    textAlign: 'center'
});