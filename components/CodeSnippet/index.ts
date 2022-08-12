import CodeSnippet from './CodeSnippet';
import type { ProgrammingLanguage } from 'graphql-server/sdk';

export type CodeSnippetProps = {
    content: string;
    language: ProgrammingLanguage;
}

export default CodeSnippet;