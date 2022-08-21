import { styled, keyframes } from '@mui/material/styles';

import { Slide as BaseSlide } from 'components/new-snippet/Shared.styled';

const slideAnimation = keyframes`
    from {
        transform: translateX(100vw);
    }

    to {
        transform: translateX(0);
    }
`;

export const Slide = styled(BaseSlide)({ 
    animation: `${slideAnimation} 900ms ease-in-out`,
    width: '100%'
});

export const Content = styled('div')(({ theme }) => ({
    margin: '0 auto',
    width: '80%',

    [theme.breakpoints.down('md')]: { width: '100%' }
}));

export const CloseText = styled('span')(({ theme }) => ({
    fontSize: '0.75rem',
    fontStyle: 'italic',
    textDecoration: 'underline',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'end',
    textIndent: '0.5rem'
}));

export const SnippetName = styled('h4')(({ theme }) => ({
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '2rem',
    color: theme.palette.secondary.main,
    margin: '10px 0 0',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: { fontSize: '1.5rem' }
}));

export { FormControl, Button } from 'components/new-snippet/Shared.styled';