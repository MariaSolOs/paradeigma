import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getStylePackage } from 'lib/snippet';
import { ProgrammingLanguage } from '@paradeigma/paradeigma-graphql/sdk';
import type { FC } from 'react';
import type { HighlighterStyle } from 'react-syntax-highlighter';
import type { CodeSnippetProps } from './index';

import Skeleton from '@mui/material/Skeleton';

const SyntaxHighlighter = dynamic(async () => {
    const syntaxHighlighter = (await import('react-syntax-highlighter')).PrismAsyncLight;
    
    for (const language of Object.values(ProgrammingLanguage)) {
        const languageSupport = (await import(`react-syntax-highlighter/dist/esm/languages/prism/${language}`)).default;
        syntaxHighlighter.registerLanguage(language, languageSupport);
    }

    return syntaxHighlighter;
}, { loading: () => <Skeleton variant="rectangular" height="5rem" sx={{ borderRadius: 1 }} /> });

const CodeSnippet: FC<CodeSnippetProps> = (props) => {
    const [style, setStyle] = useState<HighlighterStyle>();

    useEffect(() => {
        const setStylePackage = async () => {
            const stylePackage = await getStylePackage(props.style);
            setStyle(stylePackage);
        }

        setStylePackage();
    }, [props.style]);

    return (
        <SyntaxHighlighter 
        wrapLongLines
        style={style} 
        language={props.language} 
        customStyle={props.containerStyles}>
            {props.content}
        </SyntaxHighlighter>
    );
}

export default CodeSnippet;