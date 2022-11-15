import SnippetButton from './SnippetButton';

export type Editor = 'VS' | 'VSCode';

export type SnippetButtonProps = {
    editor: Editor;
    mikro: {
        name: string;
        description: string;
        content: string;
    };
};

export type ButtonContent = {
    iconClassName: string;
    text: string;
    snippet: string;
};

export default SnippetButton;
