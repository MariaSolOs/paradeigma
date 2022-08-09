/**
 * Supported programming languages used in a code snippet.
 */
export const Languages = [
    'csharp',
    'css',
    'java',
    'javascript',
    'markdown',
    'python'
] as const;
export type Language = typeof Languages[number];