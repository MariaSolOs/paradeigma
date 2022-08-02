import dynamic from 'next/dynamic';
import { Modes } from 'models/code-editor';
import type { FC } from 'react';
import type { CodeEditorProps } from './index';

import * as S from './CodeEditor.styled';

// Dynamically load the code editor because it relies on the "window" browser API.
const AceEditor = dynamic(async () => {
    const reactAce = await import('react-ace');

    // Prevent the console warning about misspelled prop names.
    await import('ace-builds/src-noconflict/ext-language_tools');

    // Import the theme.
    await import('ace-builds/src-noconflict/theme-github');

    // Import the supported modes.
    for (const mode of Modes) {
        await import(`ace-builds/src-noconflict/mode-${mode}`);
    }

    const ace = require('ace-builds/src-min-noconflict/ace');
    ace.config.set('basePath', '/code-editor/ace.min.js');
    ace.config.setModuleUrl('ace/mode/javascript_worker', '/code-editor/worker-javascript.js');

    return reactAce;
}, { ssr: false });

// TODO: Add placeholders for each mode
const CodeEditor: FC<CodeEditorProps> = (props) => (
    <S.Container>
        <AceEditor 
        name="PARADIGM_TEXT_EDITOR"
        mode={props.mode}
        theme="github"
        width="100%"
        fontSize="14px"
        minLines={5}
        maxLines={50}
        showPrintMargin={false}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        }} />
    </S.Container>
);

export default CodeEditor;