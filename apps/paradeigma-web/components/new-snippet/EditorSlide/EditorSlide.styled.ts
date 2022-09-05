import { styled, keyframes } from '@mui/material/styles';

import { Slide as BaseSlide } from 'components/new-snippet/Shared.styled';

const slideAnimation = keyframes`
    from {
        transform: translateX(-100vw);
    }

    to {
        transform: translateX(0);
    }
`;

export const Slide = styled(BaseSlide)(({ theme }) => ({ 
    animation: `${slideAnimation} 900ms ease-in-out`,
    display: 'flex', 
    justifyContent: 'space-between',
    flexDirection: 'row',

    [theme.breakpoints.down('md')]: { flexDirection: 'column' }
}));

export const FieldsContainer = styled('div')(({ theme }) => ({
    width: '50%',

    [theme.breakpoints.down('md')]: { width: '100%' }
}));

export const EditorContainer = styled('div')(({ theme }) => ({
    width: '45%',
    overflow: 'hidden', 
    borderRadius: 3, 
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderWidth: '1px 1px 1px 0',

    [theme.breakpoints.down('md')]: { width: '100%' }
}));

export const LanguageIcon = styled('i')({
    fontSize: '0.85rem', 
    marginLeft: '0.5rem'
});

export { FormControl, Button } from 'components/new-snippet/Shared.styled';