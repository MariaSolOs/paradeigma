import type { CSSProperties } from 'react';
import type { ProgrammingLanguage, SnippetStyle } from '@paradeigma-graphql';

import CodeSnippet from './CodeSnippet';

export type CodeSnippetProps = {
    content: string;
    language: ProgrammingLanguage;
    style: SnippetStyle;
    containerStyles?: CSSProperties;
}

export default CodeSnippet;