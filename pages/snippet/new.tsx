import { v4 as uuid } from 'uuid';
import useNewSnippetReducer from 'hooks/useNewSnippetReducer';
import { getLanguageIcon } from 'lib/snippet';
import { getGraphQLClient } from 'lib/graphql';
import { getSdkWithHooks } from 'graphql-server/sdk';
import { ProgrammingLanguage, SnippetStyle } from 'graphql-server/sdk';
import type { FormEvent } from 'react';
import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from 'components/Input';
import Button from 'components/Button';
import CodeEditor from 'components/new-snippet/CodeEditor';
import CodeSnippet from 'components/CodeSnippet/CodeSnippet';
import { 
    Slide1, 
    Slide2, 
    FormLabel,
    CloseText, 
    SnippetName
} from 'components/new-snippet/FormSlides';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/Select';

const graphQLClient = getGraphQLClient();
const sdk = getSdkWithHooks(graphQLClient);

// TODO: Add markdown support for the description
const NewSnippetPage: NextPage = () => {
    const [state, dispatch] = useNewSnippetReducer();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    const slide1 = (
        <Slide1>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box width={{ xs: '100%', md: '50%' }}>
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
                        placeholder="What is your snippet about?"
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
            </Box>
        </Slide1>
    );
    
    const slide2 = (
        <Slide2>
            <Box width="100%">
                <CloseText onClick={() => dispatch({ type: 'TOGGLE_SLIDE' })}>
                    <ArrowBackIcon sx={{ fontSize: '1.2rem' }} />
                    Not ready yet
                </CloseText>
                <Box sx={{ width: { xs: '100%', md: '80%' }, margin: '0 auto' }}>
                    <SnippetName>{state.name}</SnippetName>
                    <CodeSnippet 
                    content={state.content} 
                    language={state.language} 
                    style={state.style} />
                    <FormControl fullWidth margin="normal" sx={{ flexDirection: 'row' }}>
                        <FormLabel>
                            Which style would you like your snippet to have?
                        </FormLabel>
                        <SelectUnstyled
                        components={{ 
                            Root: SelectRoot, 
                            Listbox: SelectListbox, 
                            Popper: SelectPopper
                        }}
                        value={state.style}
                        onChange={style => dispatch({ type: 'SET_STYLE', style })}>
                            {Object.values(SnippetStyle).map(style =>
                                <SelectOption key={uuid()} value={style}>
                                    {style}
                                </SelectOption>
                            )}
                        </SelectUnstyled>
                    </FormControl>
                </Box>
            </Box>
        </Slide2>
    );

    return (
        <form onSubmit={handleSubmit}>
            {state.isInFirstSlide && slide1}
            {!state.isInFirstSlide && slide2}
            {state.isInFirstSlide ? 
                <Button 
                disabled={state.name.length === 0 || state.description.length === 0 || state.content.length === 0}
                onClick={() => dispatch({ type: 'TOGGLE_SLIDE' })}
                sx={{ display: 'block', margin: '0 auto 30px' }}>
                    Continue
                </Button> :
                <Button type="submit" sx={{ display: 'block', margin: '0 auto 30px' }}>
                    Done
                </Button>}
        </form>
    );
}

export default NewSnippetPage;