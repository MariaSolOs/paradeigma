import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    form: {
        display: 'flex',
        width: '95vw',
        margin: '0 2.5vw 30px'
    },

    inputRoot: {
        marginBottom: 20
    },

    label: {
        color: theme.colors['paradeigma-cyan'][6],
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '0.8rem'
    }
}));

export default useStyles;
