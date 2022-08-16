import { styled } from '@mui/material/styles';

import BaseButton from 'components/Button';

export const Slide = styled('div')({
    width: '95vw',
    minHeight: 380,
    margin: '0 2.5vw 30px'
});

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

export const Button = styled(BaseButton)({ 
    display: 'block', 
    margin: '0 auto 30px' 
});