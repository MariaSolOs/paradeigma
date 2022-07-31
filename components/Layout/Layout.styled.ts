import { styled } from '@mui/material/styles';
import theme from 'styles/theme';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

export const Title = styled('h1')({
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '5.7rem',
    color: theme.palette.secondary.main,
    margin: '0 auto',
    textAlign: 'center'
});

export const Breadcrumbs = styled(MuiBreadcrumbs)({
    margin: '30px auto',
    width: 'fit-content',

    '& li.MuiBreadcrumbs-li': {
        margin: '0 2rem'
    },
    '& li.MuiBreadcrumbs-separator': {
        fontSize: '1.7rem'
    }
});

export const NavigationLink = styled('a')({
    fontFamily: theme.typography.mono.fontFamily,
    fontSize: '1.3rem',
    color: theme.palette.secondary.light
});