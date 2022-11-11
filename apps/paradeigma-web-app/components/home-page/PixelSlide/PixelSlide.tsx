import { useMantineTheme } from '@mantine/core';
import { getMaxWidthMediaQuery } from 'lib/styles';
import useStyles from './PixelSlide.styles';
import type { FCC } from 'react';
import type { PixelSlideProps } from './index';

import Image from 'next/image';

const PixelSlide: FCC<PixelSlideProps> = (props) => {
    const { classes } = useStyles();

    const theme = useMantineTheme();

    return (
        <div className={classes.slide}>
            {props.image.alignment === 'right' && <div className={classes.text}>{props.children}</div>}
            <div className={classes.image}>
                <Image
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes={`
                        ${getMaxWidthMediaQuery(theme.breakpoints.sm)} 100px,
                        ${getMaxWidthMediaQuery(theme.breakpoints.md)} 170px,
                        230px
                    `}
                    src={props.image.src}
                    alt={props.image.altText}
                    quality={100}
                />
            </div>
            {/* By default align to the left */}
            {props.image.alignment !== 'right' && <div className={classes.text}>{props.children}</div>}
        </div>
    );
};

export default PixelSlide;
