import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    button: {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',

        [theme.fn.smallerThan('md')]: { margin: '2rem 0' }
    },

    editorIcon: {
        fontSize: '1.5rem',
        marginRight: 10
    }
}));

export default useStyles;
