import { styled } from '@mui/material/styles';
import type { ButtonProps } from 'components/Button';

import BaseButton from 'components/Button';

export const Button = styled((props: ButtonProps) => (
    <BaseButton {...props} primaryColor="#904799" secondaryColor="#E3DFE4" />
))(({ theme }) => ({
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: { margin: '2rem 0' }
}));

export const EditorIcon = styled('i')(({ theme }) => ({
    fontSize: '1.5rem',
    marginRight: 10
}));
