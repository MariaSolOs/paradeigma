import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

export const FormContainer = styled('div')(({ theme }) => ({
    width: '95vw',
    maxWidth: '1200px',
    margin: '0 auto 30px',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: { flexDirection: 'column' }
}));

export const SnippetDialogPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFF',
    padding: 'calc(1.5rem - 0.5em) 1.5rem 1.5rem'
}));