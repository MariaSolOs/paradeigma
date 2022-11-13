import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    form: {
        display: 'flex',
        width: '95vw',
        margin: '0 2.5vw',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: { flexDirection: 'column' }
    },

    inputRoot: { marginBottom: 20 },

    label: {
        color: theme.colors['paradeigma-cyan'][6],
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        display: 'inline-flex',
        alignItems: 'flex-end',
        textIndent: 5,

        [theme.fn.smallerThan('lg')]: {
            fontSize: '0.75rem',
            alignItems: 'center'
        }
    },

    formBlock: {
        width: '47.5%',

        [theme.fn.smallerThan('md')]: { width: '100%' }
    },

    editorBlock: {
        marginTop: 26,

        [theme.fn.smallerThan('md')]: { marginTop: 0 }
    },

    submitButton: {
        width: 500,
        margin: '20px auto',
        display: 'block',

        [theme.fn.smallerThan('md')]: { width: '80vw' }
    }
}));

export default useStyles;
