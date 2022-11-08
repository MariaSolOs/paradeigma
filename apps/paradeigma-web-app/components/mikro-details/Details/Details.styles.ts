import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    container: {
        margin: '0 auto',
        width: '85vw',

        [theme.fn.smallerThan('sm')]: { width: '95vw' }
    },

    body: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px auto 50px',

        [theme.fn.smallerThan('md')]: { flexDirection: 'column' }
    },

    codeColumn: {
        width: '48%',

        [theme.fn.smallerThan('md')]: { width: '100%' }
    },

    mikro: {
        height: 'fit-content',
        borderRadius: theme.radius.md,
        overflow: 'hidden',

        [theme.fn.smallerThan('md')]: { fontSize: '0.8rem' }
    },

    textDetails: {
        width: '50%',
        borderRadius: theme.radius.md,
        border: `${theme.black} solid 1px`,
        padding: '1rem',

        [theme.fn.smallerThan('md')]: { width: '100%' }
    },

    languageIconContainer: {
        backgroundColor: `${theme.colors['paradeigma-cyan'][1]}80`,
        borderRadius: theme.radius.md,
        padding: '0.3rem',
        width: 'fit-content',
        marginLeft: 'auto'
    },

    languageIcon: {
        color: theme.colors['paradeigma-cyan'][5],
        fontSize: '2.8rem',

        [theme.fn.smallerThan('md')]: { fontSize: '2rem' }
    },

    name: {
        textAlign: 'center',
        fontFamily: theme.headings.fontFamily,
        fontSize: '2rem',
        margin: '0 auto',

        [theme.fn.smallerThan('md')]: { fontSize: '1.3rem' }
    },

    description: {
        fontSize: '1rem',

        [theme.fn.smallerThan('md')]: { fontSize: '0.8rem' }
    }
}));

export default useStyles;
