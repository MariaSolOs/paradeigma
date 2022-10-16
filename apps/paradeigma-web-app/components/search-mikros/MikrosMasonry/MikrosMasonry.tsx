import { createRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';
import type { MasonryProps } from '@mui/lab/Masonry';
import type { MikrosMasonryProps } from './index';

import Masonry from '@mui/lab/Masonry';
import MikroCode from 'components/MikroCode';
import * as S from './MikrosMasonry.styled';

const MikrosMasonry: FC<MikrosMasonryProps> = (props) => {
    const theme = useTheme();
    const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <S.TransitionMasonry
        component={Masonry}
        { ...{
            columns: isBelowMedium ? 1 : 2,
            defaultColumns: isBelowMedium ? 1 : 2,
            spacing: isBelowMedium ? 3 : 4,
            defaultSpacing: isBelowMedium ? 3 : 4
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Mui won't accept this props otherwise
        } as MasonryProps as any}>
            {props.mikros.map(mikro => {
                // Hack to get rid of the findDOMNode warning with
                // react-transition-group
                const ref = createRef<HTMLDivElement>();

                // For some variation, fade stuff at different times
                const randomDelay = 100 * Math.floor(5 * Math.random());

                return (
                    <S.Transition
                    key={mikro.id}
                    nodeRef={ref}
                    timeout={300 + randomDelay}
                    classNames={{
                        enter: S.FADE_OUT_ANIMATION,
                        enterActive: S.FADE_IN_ANIMATION,
                        exit: S.FADE_IN_ANIMATION,
                        exitActive: S.FADE_OUT_ANIMATION
                    }}>
                        <S.MikroContainer
                        ref={ref}
                        onClick={() => props.onMikroClick(mikro.id)}
                        sx={{ transitionDelay: `${randomDelay}ms`}}>
                            <S.MikroTitle>{mikro.name}</S.MikroTitle>
                            <MikroCode
                            content={mikro.content}
                            language={mikro.language}
                            style={mikro.style}
                            containerStyles={{
                                borderRadius: `0 0 ${+theme.shape.borderRadius * 2}px ${+theme.shape.borderRadius * 2}px`,
                                margin: 0
                            }} />
                        </S.MikroContainer>
                    </S.Transition>
                );
            })}
        </S.TransitionMasonry>
    );
}

export default MikrosMasonry;