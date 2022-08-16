import dynamic from 'next/dynamic';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { CodeEditorProps } from './index';

// Dynamically load the code editor because it relies on the "window" browser API.
const AceEditor = dynamic(async () => {
    const reactAce = await import('react-ace');

    // Prevent the console warning about misspelled prop names.
    await import('ace-builds/src-noconflict/ext-language_tools');

    // Import the theme.
    await import('ace-builds/src-noconflict/theme-github');

    // Import the supported languages.
    for (const language of Object.values(ProgrammingLanguage)) {
        await import(`ace-builds/src-noconflict/mode-${language}`);
    }

    const ace = require('ace-builds/src-min-noconflict/ace');
    ace.config.set('basePath', '/code-editor/ace.min.js');
    ace.config.setModuleUrl('ace/mode/javascript_worker', '/code-editor/worker-javascript.js');

    return reactAce;
}, { ssr: false });

// Snippets should be short.
const NUM_LINES = 20;

// TODO: Add placeholders for each mode
const CodeEditor: FC<CodeEditorProps> = (props) => (
    <AceEditor 
    name="PARADIGM_TEXT_EDITOR"
    mode={props.mode}
    theme="github"
    fontSize="14px"
    width="100%"
    minLines={NUM_LINES}
    maxLines={NUM_LINES}
    showPrintMargin={false}
    value={props.content}
    onChange={(value, _) => props.onContentChange(value)}
    setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
    }} />
);

export default CodeEditor;