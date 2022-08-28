import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';
import type { SnippetsMasonryProps } from './index';

import CodeSnippet from 'components/CodeSnippet';
import * as S from './SnippetsMasonry.styled';

const SnippetsMasonry: FC<SnippetsMasonryProps> = (props) => {
    const theme = useTheme();
    const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <S.Masonry 
        columns={isBelowMedium ? 1 : 2} 
        spacing={isBelowMedium ? 3 : 4} 
        defaultColumns={isBelowMedium ? 1 : 2}
        defaultSpacing={isBelowMedium ? 3 : 4}>
            {props.snippets.map(snippet =>
                <S.SnippetContainer key={snippet.id}>
                    <CodeSnippet
                    content={snippet.content} 
                    language={snippet.language} 
                    style={snippet.style}
                    containerStyles={{ borderRadius: +theme.shape.borderRadius * 1.5 }} />
                </S.SnippetContainer>
            )}
        </S.Masonry>
    );
} 

export default SnippetsMasonry;