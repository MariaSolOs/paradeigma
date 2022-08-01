/**
 * Supported language for parsing and code highlighting in the code editor.
 */
export const Modes = [
    'javascript',
    'java',
    'python',
    'markdown',
    'html',
    'csharp',
    'css'
] as const;
export type Mode = typeof Modes[number];
