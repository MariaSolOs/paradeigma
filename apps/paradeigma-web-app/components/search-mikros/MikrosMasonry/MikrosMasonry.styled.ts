import { styled } from '@mui/material/styles';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const FADE_IN_ANIMATION = 'FADE_IN_ANIMATION';
export const FADE_OUT_ANIMATION = 'FADE_OUT_ANIMATION';

export const TransitionMasonry = styled(TransitionGroup)(({ theme }) => ({
    width: '85vw',
    maxWidth: 1100,
    margin: '50px auto',

    [theme.breakpoints.down('md')]: {
        width: '90vw',
        margin: '30px auto'
    }
}));

export const Transition = styled(CSSTransition)(({ theme }) => ({
    fontSize: '0.9rem',
    transition: 'all 300ms ease-in-out',

    [`&.${FADE_IN_ANIMATION}`]: {
        transform: 'scale(1)',
        opacity: 1
    },

    [`&.${FADE_OUT_ANIMATION}`]: {
        transform: 'scale(0.95)',
        opacity: 0
    },

    [theme.breakpoints.down('lg')]: { fontSize: '0.8rem' },
    [theme.breakpoints.down('md')]: { fontSize: '0.75rem' }
}));

export const MikroContainer = styled('div')(({ theme }) => ({
    borderRadius: +theme.shape.borderRadius * 2,
    border: `${theme.palette.secondary.light} solid 1px`,
    cursor: 'pointer'
}));

export const MikroTitle = styled('h4')(({ theme }) => ({
    margin: '0.5rem 0',
    textAlign: 'center',
    fontFamily: theme.typography.bungee.fontFamily
}));