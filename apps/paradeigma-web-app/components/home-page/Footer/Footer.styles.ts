import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        textAlign: 'right',
        margin: '0 20px 20px 0',
        fontSize: 14,
        fontFamily: theme.headings.fontFamily,

        [theme.fn.smallerThan('sm')]: { fontSize: 12 }
    },

    link: { color: theme.colors['paradeigma-cyan'][4] }
}));

export default useStyles;
