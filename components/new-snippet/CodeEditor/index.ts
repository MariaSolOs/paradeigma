import type { ProgrammingLanguage } from 'graphql-server/sdk';

import CodeEditor from './CodeEditor';

export type CodeEditorProps = {
    mode: ProgrammingLanguage;
    content: string;
    onContentChange: (content: string) => void;
}

export default CodeEditor;