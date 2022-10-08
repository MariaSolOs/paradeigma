import { styled } from '@mui/material/styles';

import MuiTooltip, { type TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const Text = styled('span')(({ theme }) => ({
    fontFamily: theme.typography.bungee.fontFamily
}));

export const Tooltip = styled(({ className, ...props }: TooltipProps) => 
    <MuiTooltip {...props} classes={{ popper: className }} />
)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.secondary.light
    }
}));