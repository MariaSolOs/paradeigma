import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { getMaxWidthMediaQuery } from 'lib/styles';
import useStyles from './HighlightedText.styles';
import type { FCC } from 'react';
import type { HighlightedTextProps } from './index';

import { Text, Tooltip } from '@mantine/core';

const HighlightedText: FCC<HighlightedTextProps> = (props) => {
    const { classes } = useStyles();

    const theme = useMantineTheme();
    const isSmallScreen = useMediaQuery(getMaxWidthMediaQuery(theme.breakpoints.xs));

    if (props.tooltipText) {
        return (
            <Tooltip
                withArrow
                transition="pop"
                transitionDuration={200}
                label={props.tooltipText}
                events={{
                    hover: true,
                    focus: false,
                    // On mobile, open the tooltip with touch.
                    touch: isSmallScreen
                }}
                classNames={{ tooltip: classes.tooltip }}>
                <Text component="span" className={classes.bungee}>
                    {props.children}
                    <span className={classes.asterisk}>*</span>
                </Text>
            </Tooltip>
        );
    } else {
        return <span className={classes.bungee}>{props.children}</span>;
    }
};

export default HighlightedText;
