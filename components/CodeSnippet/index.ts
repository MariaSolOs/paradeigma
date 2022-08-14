import CodeSnippet from './CodeSnippet';
import type { ProgrammingLanguage, SnippetStyle } from 'graphql-server/sdk';

export type CodeSnippetProps = {
    content: string;
    language: ProgrammingLanguage;
    style: SnippetStyle;
}

export default CodeSnippet;