import { createRef } from 'react';
import { useMantineTheme } from '@mantine/core';
import useStyles from './MikrosList.styles';
import type { FC } from 'react';
import type { MikrosMasonryProps } from './index';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MikroCode from 'components/MikroCode';

const MikrosList: FC<MikrosMasonryProps> = (props) => {
    const { classes } = useStyles();

    const theme = useMantineTheme();

    return (
        <TransitionGroup className={classes.list}>
            {props.mikros.map((mikro) => {
                // Hack to get rid of, the findDOMNode warning with
                // react-transition-group
                const ref = createRef<HTMLDivElement>();

                return (
                    <CSSTransition
                        key={mikro.id}
                        nodeRef={ref}
                        timeout={300}
                        classNames={{
                            enter: classes.fadeOut,
                            enterActive: classes.fadeIn,
                            exit: classes.fadeIn,
                            exitActive: classes.fadeOut
                        }}>
                        <div
                            ref={ref}
                            onClick={() => props.onMikroClick(mikro.id)}
                            className={classes.mikroContainer}>
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
                        </div>
                    </CSSTransition>
                );
            })}
        </TransitionGroup>
    );
};

export default MikrosList;
