import { ProgrammingLanguage } from 'graphql-server/sdk';

/**
 * @param language - The programming language
 * @returns The icon class name (as indicated in {@link https://devicon.dev/}) for 
 * that language.
 */
export const getLanguageIcon = (language: ProgrammingLanguage): string => {
    switch(language) {
        case ProgrammingLanguage.Csharp: return 'devicon-csharp-plain';
        case ProgrammingLanguage.Css: return 'devicon-css3-plain-wordmark';
        case ProgrammingLanguage.Java: return 'devicon-java-plain';
        case ProgrammingLanguage.Javascript: return 'devicon-javascript-plain';
        case ProgrammingLanguage.Markdown: return 'devicon-markdown-original';
        case ProgrammingLanguage.Python: return 'devicon-python-plain';
    }
}