import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    form: {
        display: 'flex',
        width: '95vw',
        margin: '0 2.5vw 30px',
        justifyContent: 'space-between'
    },

    inputRoot: {
        marginBottom: 20
    },

    label: {
        color: theme.colors['paradeigma-cyan'][6],
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        display: 'inline-flex',
        alignItems: 'flex-end',
        textIndent: 5
    },

    editorContainer: {
        height: 350,
        width: '50%'
    },

    editorText: {
        padding: '.1em'
    }
}));

export default useStyles;
