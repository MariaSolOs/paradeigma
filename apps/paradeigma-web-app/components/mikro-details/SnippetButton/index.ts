import type { GetMikroQuery } from '@paradeigma/graphql';

import SnippetButton from './SnippetButton';

type Editor = 'VS' | 'VSCode';

export type SnippetButtonProps = {
    editor: Editor;
    mikro: GetMikroQuery['mikro'];
};

export type SnippetContent = {
    iconClassName: string;
    buttonText: string;
    editorSnippet: string;
    editorDocs: string;
};

export default SnippetButton;
