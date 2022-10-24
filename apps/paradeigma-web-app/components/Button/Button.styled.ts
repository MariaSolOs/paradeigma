import { styled } from '@mui/material/styles';
import type { ButtonProps } from './index';

export const Button = styled('button', {
    shouldForwardProp: (prop) => !['primaryColor', 'secondaryColor'].includes(prop.toString())
})<ButtonProps>(({ theme, primaryColor = theme.palette.secondary.main, secondaryColor = '#FFF' }) => ({
    backgroundColor: secondaryColor,
    color: primaryColor,
    border: `1px solid ${primaryColor}`,
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
        backgroundColor: primaryColor,
        color: secondaryColor
    },

    '&:disabled': {
        filter: 'brightness(70%)',
        cursor: 'not-allowed'
    },

    [theme.breakpoints.down('sm')]: { fontSize: '0.8rem' }
}));
