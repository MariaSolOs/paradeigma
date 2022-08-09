import type { Language } from 'models/snippet';

import CodeEditor from './CodeEditor';

export type CodeEditorProps = {
    mode: Language;
    content: string;
    onContentChange: (content: string) => void;
}

export default CodeEditor;