import { styled } from '@mui/material/styles';
import theme from 'styles/theme';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

export const Title = styled('h1')({
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '5.7rem',
    color: theme.palette.secondary.main,
    margin: '0 auto',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: { fontSize: '4.5rem' },

    [theme.breakpoints.down('sm')]: { fontSize: '3rem' }
});

export const Breadcrumbs = styled(MuiBreadcrumbs)({
    margin: '30px auto',
    width: 'fit-content',

    '& li.MuiBreadcrumbs-li': { margin: '0 2rem' },

    '& li.MuiBreadcrumbs-separator': { 
        fontSize: '1.7rem',
        color: theme.palette.primary.light
    },

    [theme.breakpoints.down('sm')]: {
        margin: '2rem auto',

        '& li.MuiBreadcrumbs-li': { margin: '0 1rem' },

        '& li.MuiBreadcrumbs-separator': { fontSize: '1rem' }
    }
});

export const NavigationLink = styled('a')({
    fontFamily: theme.typography.mono.fontFamily,
    fontSize: '1.3rem',
    color: theme.palette.primary.main,

    [theme.breakpoints.down('md')]: { fontSize: '1rem' },
    
    [theme.breakpoints.down('sm')]: { fontSize: '0.8rem' }
});