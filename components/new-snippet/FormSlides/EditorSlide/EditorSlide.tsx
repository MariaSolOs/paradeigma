import { v4 as uuid } from 'uuid';
import { getLanguageIcon } from 'lib/snippet';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { EditorSlideProps } from './index';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import Input from 'components/Input';
import CodeEditor from 'components/new-snippet/CodeEditor';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/Select';
import * as S from './EditorSlide.styled';

const EditorSlide: FC<EditorSlideProps> = (props) => (
    <>
        <S.Slide>
            <Box width={{ xs: '100%', md: '50%' }}>
                <FormControl fullWidth margin="normal">
                    <Input
                    value={props.name}
                    onChange={(event) => props.onNameChange(event.target.value)}
                    placeholder="Baptize your snippet."
                    required />
                    <S.FormLabel sx={{ textIndent: '0.5rem' }}>
                        <TungstenOutlinedIcon />{' '}
                        Name it like a variable: Keep it short, but self-explanatory.
                    </S.FormLabel>
                </FormControl>
                <FormControl fullWidth margin="normal">
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
                </FormControl>
                <FormControl fullWidth margin="normal" sx={{ flexDirection: 'row' }}>
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
                                <Box 
                                component="i" 
                                className={getLanguageIcon(language)}
                                sx={{ fontSize: '0.85rem', marginLeft: '0.5rem' }} />
                            </SelectOption>
                        )}
                    </SelectUnstyled>
                </FormControl>
            </Box>
            <CodeEditor 
            mode={props.language} 
            content={props.content}
            onContentChange={props.onContentChange} />
        </S.Slide>
        <S.Button 
        disabled={props.name.length === 0 || props.description.length === 0 || props.content.length === 0} 
        onClick={props.onContinue}>
            Continue
        </S.Button>
    </>
);

export default EditorSlide;