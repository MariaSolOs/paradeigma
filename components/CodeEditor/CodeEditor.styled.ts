import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
    '& .ace_editor': {
        boxShadow: `4px 4px 10px -4px ${theme.palette.secondary.light}`
    }
}));