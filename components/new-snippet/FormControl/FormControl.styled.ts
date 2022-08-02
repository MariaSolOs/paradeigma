import { styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export const Control = styled(FormControl)({
    margin: '0 auto 1.8rem',
    width: '100%'
});

export const HelperText = styled(FormHelperText)(({ theme }) => ({
    fontFamily: 'inherit',
    fontSize: '0.7rem',
    fontStyle: 'italic',
    color: theme.palette.primary.main,
    margin: '4px 0 0 0',
    display: 'inline-flex',
    alignItems: 'center'
}));