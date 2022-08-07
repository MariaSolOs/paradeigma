import { styled } from '@mui/material/styles';

export const EditorSlideContainer = styled('div')(({ theme }) => ({
    width: '95vw',
    maxWidth: '1200px',
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: { flexDirection: 'column' },

    [theme.breakpoints.down('sm')]: { margin: '30px auto' }
}));