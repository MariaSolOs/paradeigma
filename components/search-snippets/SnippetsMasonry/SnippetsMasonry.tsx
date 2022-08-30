import { createRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';
import type { MasonryProps } from '@mui/lab/Masonry';
import type { SnippetsMasonryProps } from './index';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import CodeSnippet from 'components/CodeSnippet';
import * as S from './SnippetsMasonry.styled';

const SnippetsMasonry: FC<SnippetsMasonryProps> = (props) => {
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
        } as MasonryProps as any}>
            {props.snippets.map(snippet => {
                // Hack to get rid of the findDOMNode warning with 
                // react-transition-group
                const ref = createRef<HTMLDivElement>();

                // For some variation, fade stuff at different times
                const randomDelay = 100 * Math.floor(5 * Math.random());
                
                return (
                    <S.Transition 
                    key={snippet.id}
                    nodeRef={ref}
                    timeout={300 + randomDelay}
                    classNames={{
                        enter: S.FADE_OUT_ANIMATION,
                        enterActive: S.FADE_IN_ANIMATION,
                        exit: S.FADE_IN_ANIMATION,
                        exitActive: S.FADE_OUT_ANIMATION
                    }}>
                        <Box ref={ref} sx={{ 
                            transitionDelay: `${randomDelay}ms`,
                            borderRadius: 2,
                            border: `${theme.palette.secondary.light} solid 1px`
                        }}>
                            <Box component="h4" sx={{
                                margin: '0.5rem 0',
                                textAlign: 'center'
                            }}>{snippet.name}</Box>
                            <CodeSnippet
                            content={snippet.content} 
                            language={snippet.language} 
                            style={snippet.style}
                            containerStyles={{ 
                                borderRadius: `0 0 ${+theme.shape.borderRadius * 2}px ${+theme.shape.borderRadius * 2}px`,
                                margin: 0
                            }} />
                        </Box>
                    </S.Transition>
                );
            })}
        </S.TransitionMasonry>
    );
} 

export default SnippetsMasonry;