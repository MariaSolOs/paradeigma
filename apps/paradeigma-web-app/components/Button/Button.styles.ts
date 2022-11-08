import { createStyles } from '@mantine/core';
import type { ButtonStyleProps } from './index';

const useStyles = createStyles((
    theme,
    { primaryColor = theme.colors['paradeigma-blue'][7], secondaryColor = '#FFF' }: ButtonStyleProps
) => ({
    button: {
        backgroundColor: secondaryColor,
        color: primaryColor,
        border: `1px solid ${primaryColor}`,
        fontFamily: theme.fontFamily,
        fontWeight: 'bold',
        fontSize: '0.9rem',
        borderRadius: theme.radius.lg,
        height: 42,
        padding: '4px 1rem',
        minWidth: 80,
        cursor: 'pointer',
        transition: 'all 300ms ease-in-out',

        '&:hover:not(:disabled)': {
            backgroundColor: primaryColor,
            color: secondaryColor
        },

        '&:disabled': {
            filter: 'brightness(70%)',
            cursor: 'not-allowed'
        },

        [theme.fn.smallerThan('sm')]: { fontSize: '0.8rem' }
    }
}));

export default useStyles;
