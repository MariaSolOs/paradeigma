import { styled } from '@mui/material/styles';

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

export const SnippetTitle = styled('h4')(({ theme }) => ({
    fontFamily: theme.typography.bungee.fontFamily,
    fontSize: '2rem',
    color: theme.palette.secondary.main,
    margin: '10px 0 0',
    textAlign: 'center'
}));