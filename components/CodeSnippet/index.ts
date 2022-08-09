import CodeSnippet from './CodeSnippet';
import type { Language } from 'models/snippet';

export type CodeSnippetProps = {
    content: string;
    language: Language;
}

export default CodeSnippet;