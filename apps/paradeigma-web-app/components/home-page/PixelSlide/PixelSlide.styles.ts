import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    slide: {
        display: 'flex',
        alignItems: 'center',
        width: '80vw',
        maxWidth: 1100,
        margin: '50px auto',

        [theme.fn.smallerThan('md')]: {
            width: '90vw',
            margin: '30px auto'
        }
    },

    image: {
        position: 'relative',
        minWidth: 230,
        minHeight: 230,

        [theme.fn.smallerThan('md')]: {
            minWidth: 170,
            minHeight: 170
        },

        [theme.fn.smallerThan('sm')]: {
            minWidth: 100,
            minHeight: 100
        }
    },

    text: {
        textAlign: 'center',
        margin: '0 20px',
        fontSize: '1.3rem',

        [theme.fn.smallerThan('md')]: { fontSize: '1rem' },

        [theme.fn.smallerThan('sm')]: {
            margin: '0 10px',
            fontSize: '0.8rem'
        }
    }
}));

export default useStyles;
