import SnippetButton from './SnippetButton';

export type Editor = 'VS' | 'VSCode';

export type SnippetButtonProps = {
    editor: Editor;
};

export default SnippetButton;
