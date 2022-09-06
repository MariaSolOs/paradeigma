import { ProgrammingLanguage, SnippetStyle } from '@paradeigma-graphql';
import type { HighlighterStyle } from 'react-syntax-highlighter';

/**
 * @param language - The programming language
 * @returns The icon class name (as indicated in {@link https://devicon.dev/}) for 
that language.
 */
export const getLanguageIcon = (language: ProgrammingLanguage): string => {
    switch (language) {
        case ProgrammingLanguage.Csharp: return 'devicon-csharp-plain';
        case ProgrammingLanguage.Css: return 'devicon-css3-plain-wordmark';
        case ProgrammingLanguage.Java: return 'devicon-java-plain';
        case ProgrammingLanguage.Javascript: return 'devicon-javascript-plain';
        case ProgrammingLanguage.Markdown: return 'devicon-markdown-original';
        case ProgrammingLanguage.Python: return 'devicon-python-plain';
    }
}

/**
 * @param style - The snippet's style
 * @returns The react-syntax-highlighter module containing the style's 
 * implementation.
 */
export const getStylePackage = async (style: SnippetStyle): Promise<HighlighterStyle> => {
    switch (style) {
        case SnippetStyle.A11yDark: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).a11yDark;
        case SnippetStyle.AtomDark: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).atomDark;
        case SnippetStyle.Base16AteliersulphurpoolLight: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).base16AteliersulphurpoolLight;
        case SnippetStyle.ColdarkCold: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).coldarkCold;
        case SnippetStyle.ColdarkDark: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).coldarkDark;
        case SnippetStyle.Coy: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).coy;
        case SnippetStyle.Dracula: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).dracula;
        case SnippetStyle.DuotoneDark: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).duotoneDark;
        case SnippetStyle.DuotoneSea: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).duotoneSea;
        case SnippetStyle.Funky: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).funky;
        case SnippetStyle.Ghcolors: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).ghcolors;
        case SnippetStyle.MaterialDark: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).materialDark;
        case SnippetStyle.MaterialLight: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).materialLight;
        case SnippetStyle.MaterialOceanic: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).materialOceanic;
        case SnippetStyle.Nord: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).nord;
        case SnippetStyle.Okaidia: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).okaidia;
        case SnippetStyle.Prism: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).prism;
        case SnippetStyle.ShadesOfPurple: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).shadesOfPurple;
        case SnippetStyle.Solarizedlight: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).solarizedlight;
        case SnippetStyle.Synthwave84: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).synthwave84;
        case SnippetStyle.Tomorrow: return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).tomorrow;
    }
}