import dynamic from 'next/dynamic';
import { v4 as uuid } from 'uuid';
import { getLanguageIcon } from 'lib/snippet';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { EditorSlideProps } from './index';

import Skeleton from '@mui/material/Skeleton';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import Input from 'components/Input';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/Select';
import * as S from './EditorSlide.styled';

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
}, { 
    ssr: false, 
    loading: () => <Skeleton variant="rectangular" width="100%" height="100%" />
});

// Snippets should be short.
const EDITOR_NUM_LINES = 20;

const EditorSlide: FC<EditorSlideProps> = (props) => (
    <>
        <S.Slide>
            <S.FieldsContainer>
                <S.FormControl>
                    <Input
                    value={props.name}
                    onChange={(event) => props.onNameChange(event.target.value)}
                    placeholder="Baptize your snippet."
                    required />
                    <S.FormLabel sx={{ textIndent: '0.5rem' }}>
                        <TungstenOutlinedIcon />{' '}
                        Name it like a variable: Keep it short, but self-explanatory.
                    </S.FormLabel>
                </S.FormControl>
                <S.FormControl>
                    <Input
                    value={props.description}
                    onChange={event => props.onDescriptionChange(event.target.value)}
                    placeholder="What is your snippet about?"
                    multiline
                    rows={3} />
                    <S.FormLabel sx={{ textIndent: '0.5rem' }}>
                        <TungstenOutlinedIcon />{' '}
                        As with good docs, a complete description is always appreciated.
                    </S.FormLabel>
                </S.FormControl>
                <S.FormControl sx={{ flexDirection: 'row' }}>
                    <S.FormLabel>
                        Which programming language are you using?
                    </S.FormLabel>
                    <SelectUnstyled
                    components={{ 
                        Root: SelectRoot, 
                        Listbox: SelectListbox, 
                        Popper: SelectPopper
                    }}
                    value={props.language}
                    onChange={props.onLanguageChange}>
                        {Object.values(ProgrammingLanguage).map(language =>
                            <SelectOption key={uuid()} value={language}>
                                {language}
                                <S.LanguageIcon className={getLanguageIcon(language)} />
                            </SelectOption>
                        )}
                    </SelectUnstyled>
                </S.FormControl>
            </S.FieldsContainer>
            <S.EditorContainer elevation={2}>
                <AceEditor 
                name="PARADIGM_TEXT_EDITOR"
                mode={props.language}
                theme="github"
                fontSize="14px"
                width="100%"
                minLines={EDITOR_NUM_LINES}
                maxLines={EDITOR_NUM_LINES}
                showPrintMargin={false}
                value={props.content}
                onChange={(value, _) => props.onContentChange(value)}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true
                }} />
            </S.EditorContainer>
        </S.Slide>
        <S.Button 
        disabled={props.name.length === 0 || props.description.length === 0 || props.content.length === 0} 
        onClick={props.onContinue}>
            Continue
        </S.Button>
    </>
);

export default EditorSlide;