import useStyles from './Spinner.styles';
import type { FC } from 'react';
import type { SpinnerProps } from './index';

import { LoadingOverlay } from '@mantine/core';

const Spinner: FC<SpinnerProps> = (props) => {
    const { classes } = useStyles();

    return (
        <LoadingOverlay
            loader={<div className={classes.loader} />}
            visible={props.visible}
            sx={(theme) => ({
                backgroundColor: theme.colors['paradeigma-cyan'][2],
                opacity: 0.6
            })}
        />
    );
};

export default Spinner;
