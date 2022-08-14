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

const Slide = styled('div')(({ theme }) => ({
    width: '95vw',
    margin: '0 2.5vw 30px',
    display: 'flex',

    [theme.breakpoints.down('md')]: { flexDirection: 'column' }
}));

export const Slide1 = styled(Slide)({ animation: `${slide1Animation} 1s ease-in-out` });

export const Slide2 = styled(Slide)({ animation: `${slide2Animation} 1s ease-in-out` });

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