import type { ChangeEventHandler } from 'react';

import CodeEditor from './CodeEditor';

export type CodeEditorProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    error: string | undefined;
};

export default CodeEditor;
