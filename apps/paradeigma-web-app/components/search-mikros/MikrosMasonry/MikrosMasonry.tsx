import { createRef } from 'react';
import useStyles from './MikrosMasonry.styles';
import type { FC } from 'react';
import type { MasonryProps } from 'react-masonry-css';
import type { MikrosMasonryProps } from './index';

import { Box, useMantineTheme } from '@mantine/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Masonry from 'react-masonry-css';
import MikroCode from 'components/MikroCode';

const MikrosMasonry: FC<MikrosMasonryProps> = (props) => {
    const { classes } = useStyles();

    const theme = useMantineTheme();

    return (
        <TransitionGroup
            component={Masonry}
            {...{
                breakpointCols: {
                    default: 2,
                    [theme.breakpoints.md]: 1
                },
                className: classes.masonry
            } as MasonryProps}>
            {props.mikros.map((mikro) => {
                // Hack to get rid of, the findDOMNode warning with
                // react-transition-group
                const ref = createRef<HTMLDivElement>();

                // For some variation, fade stuff at different times
                const randomDelay = 100 * Math.floor(5 * Math.random());

                return (
                    <CSSTransition
                        key={mikro.id}
                        nodeRef={ref}
                        timeout={400 + randomDelay}
                        classNames={{
                            enter: classes.fadeOut,
                            enterActive: classes.fadeIn,
                            exit: classes.fadeIn,
                            exitActive: classes.fadeOut
                        }}>
                        <Box
                            ref={ref}
                            onClick={() => props.onMikroClick(mikro.id)}
                            className={classes.mikroContainer}
                            sx={{ transitionDelay: `${randomDelay}ms` }}>
                            <h4 className={classes.mikroTitle}>{mikro.name}</h4>
                            <MikroCode
                                content={mikro.content}
                                language={mikro.language}
                                style={mikro.style}
                                containerStyles={{
                                    borderRadius: `0 0 ${theme.radius.md}px ${theme.radius.md}px`,
                                    margin: 0
                                }}
                            />
                        </Box>
                    </CSSTransition>
                );
            })}
        </TransitionGroup>
    );
};

export default MikrosMasonry;
