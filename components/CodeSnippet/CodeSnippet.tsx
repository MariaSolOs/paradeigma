import dynamic from 'next/dynamic';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { CodeSnippetProps } from './index';

import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const SyntaxHighlighter = dynamic(async () => {
    const syntaxHighlighter = (await import('react-syntax-highlighter')).PrismAsyncLight;

    for (const language of Object.values(ProgrammingLanguage)) {
        const languageSupport = (await import(`react-syntax-highlighter/dist/esm/languages/prism/${language}`)).default;
        syntaxHighlighter.registerLanguage(language, languageSupport);
    }

    return syntaxHighlighter;
});

const CodeSnippet: FC<CodeSnippetProps> = (props) => (
    <SyntaxHighlighter language={props.language} style={atomDark}>
        {props.content}
    </SyntaxHighlighter>
);

export default CodeSnippet;