import { styled, keyframes } from '@mui/material/styles';

import { Slide as BaseSlide } from 'components/new-snippet/FormSlides/Shared.styled';

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

export { FormLabel, Button } from 'components/new-snippet/FormSlides/Shared.styled';