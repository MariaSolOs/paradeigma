import { createStyles } from '@mantine/core';
import { BUNGEE_SHADE_FONT_FAMILY } from 'styles/theme';

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: BUNGEE_SHADE_FONT_FAMILY,
        fontSize: '5.7rem',
        color: theme.colors['paradeigma-blue'][7],
        margin: '0 auto',
        textAlign: 'center',
        cursor: 'pointer',

        [theme.fn.smallerThan('md')]: { fontSize: '4.3rem' },

        [theme.fn.smallerThan('sm')]: { fontSize: '2.5rem' }
    }
}));

export default useStyles;
