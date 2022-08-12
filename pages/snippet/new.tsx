import { v4 as uuid } from 'uuid';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import useNewSnippetReducer from 'hooks/useNewSnippetReducer';
import { getLanguageIcon } from 'lib/snippet';
import type { FormEvent } from 'react';
import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import FormControl from '@mui/material/FormControl';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from 'components/Input';
import Button from 'components/Button';
import CodeEditor from 'components/new-snippet/CodeEditor';
import CodeSnippet from 'components/CodeSnippet/CodeSnippet';
import { FormContainer, FormLabel } from 'components/new-snippet/EditorForm';
import { 
    DialogPaper as SnippetDialogPaper,
    CloseText
} from 'components/new-snippet/SnippetDialog';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/Select';

const NewSnippetPage: NextPage = () => {
    const [state, dispatch] = useNewSnippetReducer();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <FormControl fullWidth margin="normal">
                        <Input
                        value={state.name}
                        onChange={(event) => dispatch({ type: 'SET_NAME', name: event.target.value })}
                        placeholder="Baptize your snippet."
                        required />
                        <FormLabel sx={{ textIndent: '0.5rem' }}>
                            <TungstenOutlinedIcon />{' '}
                            Name it like a variable: Keep it short, but self-explanatory.
                        </FormLabel>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <Input
                        value={state.description}
                        onChange={event => dispatch({ type: 'SET_DESCRIPTION', description: event.target.value })}
                        placeholder="What is the snippet about?"
                        multiline
                        rows={3} />
                        <FormLabel sx={{ textIndent: '0.5rem' }}>
                            <TungstenOutlinedIcon />{' '}
                            As with good docs, a complete description is always appreciated.
                        </FormLabel>
                    </FormControl>
                    <FormControl fullWidth margin="normal" sx={{ flexDirection: 'row' }}>
                        <FormLabel>
                            Which programming language are you using?
                        </FormLabel>
                        <SelectUnstyled
                        components={{ 
                            Root: SelectRoot, 
                            Listbox: SelectListbox, 
                            Popper: SelectPopper
                        }}
                        value={state.language}
                        onChange={language => dispatch({ type: 'SET_LANGUAGE', language })}>
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
                mode={state.language} 
                content={state.content}
                onContentChange={content => dispatch({ type: 'SET_CONTENT', content })} />
            </FormContainer>
            <Button 
            onClick={() => dispatch({ type: 'TOGGLE_SLIDE' })} 
            sx={{ display: 'block', margin: '0 auto 30px' }}>
                Save changes
            </Button>
            <Dialog 
            open={false}
            onClose={() => dispatch({ type: 'TOGGLE_SLIDE' })}
            PaperComponent={SnippetDialogPaper}>
                <CloseText onClick={() => dispatch({ type: 'TOGGLE_SLIDE' })}>
                    <ArrowBackIcon sx={{ fontSize: '1.2rem' }} />
                    Not ready yet
                </CloseText>
                <CodeSnippet content={`function HelloWorld() {
    console.log('Hello world!');
}`} language={state.language} />
                {/* <CodeSnippet content={state.content} language={state.language} /> */}
                <Button type="submit" sx={{ width: 60, margin: 'auto' }}>
                    Done
                </Button>
            </Dialog>
        </form>
    );
}

export default NewSnippetPage;