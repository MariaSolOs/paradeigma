import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    bar: {
        width: '60vw',
        maxWidth: 800,
        margin: '0 auto',

        [theme.fn.smallerThan('md')]: { width: '90vw' }
    },

    selectRoot: {
        display: 'flex',
        marginTop: '1.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: { flexDirection: 'column' }
    },

    selectWrapper: {
        width: 350,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
            marginTop: 5
        }
    },

    selectLabel: {
        fontSize: '0.8rem',
        fontStyle: 'italic',
        color: theme.colors['paradeigma-cyan'][6],
        margin: '4px 0 0 0',

        [theme.fn.smallerThan('sm')]: { fontSize: '0.75rem' }
    }
}));

export default useStyles;
