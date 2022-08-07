import { v4 as uuid } from 'uuid';
import { Languages } from 'models/snippet';
import useNewSnippetReducer from 'hooks/useNewSnippetReducer';
import { getLanguageIcon } from 'lib/snippet';
import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import InputField from 'components/InputField';
import FormLabel from 'components/new-snippet/FormLabel';
import CodeEditor from 'components/new-snippet/CodeEditor';
import { EditorSlideContainer } from 'components/new-snippet/Layout';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/SelectComponents';

const NewSnippetPage: NextPage = () => {
    const [state, dispatch] = useNewSnippetReducer();

    return (
        <EditorSlideContainer>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                <FormControl fullWidth margin="normal">
                    <InputField
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
                    <InputField
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
                        // Popper: props => <SelectPopper { ...props } /> 
                    }}
                    value={state.language}
                    onChange={language => dispatch({ type: 'SET_LANGUAGE', language })}>
                        {Languages.map(language =>
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
            <CodeEditor mode={state.language} />
        </EditorSlideContainer>
    );
}

export default NewSnippetPage;