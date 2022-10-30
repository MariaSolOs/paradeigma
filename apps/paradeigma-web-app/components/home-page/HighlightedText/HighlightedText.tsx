import useStyles from './HighlightedText.styles';
import type { FCC } from 'react';
import type { HighlightedTextProps } from './index';

import { Text, Tooltip } from '@mantine/core';

const HighlightedText: FCC<HighlightedTextProps> = (props) => {
    const { classes } = useStyles();

    if (props.tooltipText) {
        return (
            <Tooltip
                withArrow
                transition="pop"
                transitionDuration={200}
                label={props.tooltipText}
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
