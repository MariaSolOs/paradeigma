import { styled } from '@mui/material/styles';
import type { TooltipProps } from '@mui/material/Tooltip';

import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const Text = styled('span')(({ theme }) => ({
    fontFamily: theme.typography.bungee.fontFamily
}));

export const Asterisk = styled('span')(({ theme }) => ({
    verticalAlign: 'top',
    fontSize: '80%',
    color: theme.palette.secondary.light
}));

export const Tooltip = styled(({ className, ...props }: TooltipProps) =>
    <MuiTooltip {...props} classes={{ popper: className, arrow: className }} />
)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontFamily: theme.typography.mono.fontFamily,
        backgroundColor: theme.palette.secondary.light,

        [theme.breakpoints.down('md')]: {
            fontSize: '0.6rem',
            padding: '4px 6px'
        }
    },

    [`& .${tooltipClasses.arrow}`]: { color: theme.palette.secondary.light }
}));