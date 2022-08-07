import type { Language } from 'models/snippet';

/**
 * @param language - The programming language
 * @returns The icon class name (as indicated in {@link https://devicon.dev/}) for 
 * that language.
 */
export const getLanguageIcon = (language: Language): string => {
    switch(language) {
        case 'csharp': return 'devicon-csharp-plain';
        case 'css': return 'devicon-css3-plain-wordmark';
        case 'html': return 'devicon-html5-plain-wordmark';
        case 'java': return 'devicon-java-plain';
        case 'javascript': return 'devicon-javascript-plain';
        case 'markdown': return 'devicon-markdown-original';
        case 'python': return 'devicon-python-plain';
    }
}