import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

export const DialogPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFF',
    padding: 'calc(1.5rem - 0.5em) 1.5rem 1.5rem',
    borderRadius: +theme.shape.borderRadius * 2,
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