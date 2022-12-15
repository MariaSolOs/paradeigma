import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        textAlign: 'right',
        fontSize: 12,
        fontFamily: theme.headings.fontFamily,

        [theme.fn.smallerThan('sm')]: { fontSize: 10 }
    },

    row: {
        margin: '0 1rem 1rem 0',

        [theme.fn.smallerThan('sm')]: { margin: '0 3vw 10px' }
    },

    link: { color: theme.colors['paradeigma-cyan'][4] }
}));

export default useStyles;
