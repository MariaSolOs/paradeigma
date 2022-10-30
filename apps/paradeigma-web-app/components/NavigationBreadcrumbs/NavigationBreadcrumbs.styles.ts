import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    breadcrumbs: {
        margin: '30px auto',
        width: 'fit-content',

        [theme.fn.smallerThan('sm')]: { margin: '2rem auto' }
    },

    separator: {
        fontSize: '1.7rem',
        color: theme.colors['paradeigma-cyan'][1],

        [theme.fn.smallerThan('sm')]: { fontSize: '1rem' }
    },

    navLink: {
        fontSize: '1.3rem',
        color: theme.colors['paradeigma-blue'][6],
        margin: '0 2rem',

        [theme.fn.smallerThan('md')]: { fontSize: '1rem' },

        [theme.fn.smallerThan('sm')]: {
            fontSize: '0.8rem',
            margin: '0 1rem'
        }
    }
}));

export default useStyles;
