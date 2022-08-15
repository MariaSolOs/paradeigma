import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

// TODO: Check if the max lengths are appropriate
// TODO: Add a maximum length for content?
/**
 * Maximum length for the name field.
 */
export const NAME_MAX_LENGTH = 30;

/**
 * Maximum length for the description field.
 */
export const DESCRIPTION_MAX_LENGTH = 100;

/**
 * A snippet's style (A.K.A color theme).
 */
export type Style = NonNullable<SyntaxHighlighterProps['style']>;