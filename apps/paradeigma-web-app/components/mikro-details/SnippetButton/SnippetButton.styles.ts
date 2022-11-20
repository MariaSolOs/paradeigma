import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    editorButton: {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',

        [theme.fn.smallerThan('md')]: { margin: '2rem 0' }
    },

    copyButton: {
        fontSize: '0.75rem',
        padding: 10,
        height: 'auto',
        display: 'block',
        margin: 'auto'
    },

    editorIcon: {
        fontSize: '1.5rem',
        marginRight: 10
    },

    modal: {
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors['paradeigma-blue'][1]
    },

    docsLink: {
        fontSize: '0.65rem',
        fontStyle: 'italic',
        color: theme.colors['paradeigma-blue'][6]
    }
}));

export default useStyles;
