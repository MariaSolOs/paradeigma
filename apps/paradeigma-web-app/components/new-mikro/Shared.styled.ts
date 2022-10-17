import { styled } from '@mui/material/styles';

import MuiFormControl from '@mui/material/FormControl';
import BaseButton from 'components/Button';

export const Slide = styled('div')({
    width: '95vw',
    minHeight: 380,
    margin: '0 2.5vw 30px'
});

export const FormControl = styled(MuiFormControl)({
    width: '100%',
    margin: '1rem 0 0.5rem'
});

export const Button = styled(BaseButton)({
    display: 'block',
    margin: '0 auto 30px'
});
