import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getStylePackage } from 'lib/snippet';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { Style } from 'models/snippet';
import type { CodeSnippetProps } from './index';

const SyntaxHighlighter = dynamic(async () => {
    const syntaxHighlighter = (await import('react-syntax-highlighter')).PrismAsyncLight;

    for (const language of Object.values(ProgrammingLanguage)) {
        const languageSupport = (await import(`react-syntax-highlighter/dist/esm/languages/prism/${language}`)).default;
        syntaxHighlighter.registerLanguage(language, languageSupport);
    }

    return syntaxHighlighter;
});

const CodeSnippet: FC<CodeSnippetProps> = (props) => {
    const [style, setStyle] = useState<Style>();

    useEffect(() => {
        const setStylePackage = async () => {
            const stylePackage = await getStylePackage(props.style);
            setStyle(stylePackage);
        }

        setStylePackage();
    }, [props.style]);

    return (
        <SyntaxHighlighter language={props.language} style={style}>
            {props.content}
        </SyntaxHighlighter>
    );
}

export default CodeSnippet;