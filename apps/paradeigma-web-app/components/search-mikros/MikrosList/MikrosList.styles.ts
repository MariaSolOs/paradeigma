import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    list: {
        width: '85vw',
        maxWidth: 1100,
        margin: '50px auto',

        [theme.fn.smallerThan('md')]: {
            width: '90vw',
            margin: '30px auto'
        }
    },

    mikroContainer: {
        borderRadius: theme.radius.md,
        border: `${theme.colors['paradeigma-blue'][9]} solid 1px`,
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'all 300ms ease-in-out',
        margin: '2rem 0',

        [theme.fn.smallerThan('lg')]: { fontSize: '0.8rem' },

        [theme.fn.smallerThan('md')]: { fontSize: '0.75rem' }
    },

    mikroTitle: {
        margin: '0.5rem 0',
        textAlign: 'center',
        fontFamily: theme.headings.fontFamily
    },

    fadeIn: {
        transform: 'scale(1)',
        opacity: 1
    },

    fadeOut: {
        transform: 'scale(0.95)',
        opacity: 0
    }
}));

export default useStyles;
