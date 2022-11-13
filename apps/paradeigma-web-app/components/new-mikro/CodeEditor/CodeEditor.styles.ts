import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    editor: {
        display: 'flex',
        border: `1px solid ${theme.colors['paradeigma-cyan'][2]}`,
        borderRadius: theme.radius.md,
        overflow: 'hidden'
    },

    lineNumbers: {
        padding: '0.5rem 0.3rem',
        borderRight: `1px solid ${theme.colors['paradeigma-cyan'][2]}`,
        backgroundColor: theme.colors['paradeigma-cyan'][0],
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors['paradeigma-cyan'][6],
        width: 28,
        textAlign: 'center'
    },

    areaRoot: {
        width: `calc(100% - 19px)`,
        padding: '0.5rem'
    },

    areaInput: {
        border: 'none',
        borderRadius: 0,
        padding: 0,

        '&:focus': { border: 'none' }
    }
}));

export default useStyles;
