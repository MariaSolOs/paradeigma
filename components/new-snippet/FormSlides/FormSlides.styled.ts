import { styled, keyframes } from '@mui/material/styles';

const slide1Animation = keyframes`
    from {
        transform: translateX(-100vw);
    }

    to {
        transform: translateX(0);
    }
`;

const slide2Animation = keyframes`
    from {
        transform: translateX(100vw);
    }

    to {
        transform: translateX(0);
    }
`;

const Slide = styled('div')({
    width: '95vw',
    minHeight: 380,
    margin: '0 2.5vw 30px'
});

export const Slide1 = styled(Slide)({ animation: `${slide1Animation} 900ms ease-in-out` });

export const Slide2 = styled(Slide)({ animation: `${slide2Animation} 900ms ease-in-out` });

export const FormLabel = styled('label')(({ theme }) => ({
    fontFamily: 'inherit',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: theme.palette.primary.main,
    margin: '4px 0 0 0',
    display: 'inline-flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: { fontSize: '0.75rem' }
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