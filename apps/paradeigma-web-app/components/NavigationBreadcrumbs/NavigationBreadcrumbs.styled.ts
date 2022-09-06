import { styled } from '@mui/material/styles';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

export const Breadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
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
}));

export const NavigationLink = styled('a')(({ theme }) => ({
    fontFamily: theme.typography.mono.fontFamily,
    fontSize: '1.3rem',
    color: theme.palette.secondary.light,

    [theme.breakpoints.down('md')]: { fontSize: '1rem' },
    
    [theme.breakpoints.down('sm')]: { fontSize: '0.8rem' }
}));