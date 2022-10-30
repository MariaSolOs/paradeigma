import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    bungee: {
        fontFamily: theme.headings.fontFamily
    },

    asterisk: {
        verticalAlign: 'top',
        fontSize: '80%',
        color: theme.colors['paradeigma-blue'][6]
    },

    tooltip: {
        backgroundColor: theme.colors['paradeigma-blue'][6],
        fontSize: '0.7rem',

        [theme.fn.smallerThan('md')]: {
            fontSize: '0.6rem',
            padding: '4px 6px'
        }
    }
}));

export default useStyles;
