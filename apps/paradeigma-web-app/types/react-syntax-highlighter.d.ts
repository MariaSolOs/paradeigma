import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

declare module 'react-syntax-highlighter' {
    type HighlighterStyle = NonNullable<SyntaxHighlighterProps['style']>;
}
