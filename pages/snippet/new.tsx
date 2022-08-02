import { useState } from 'react';
import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import CodeEditor from 'components/CodeEditor';
import FormControl from 'components/new-snippet/FormControl';

const NewSnippetPage: NextPage = () => {
    const [name, setName] = useState('');

    return (
        <Box sx={{ 
            width: { xs: '95vw', md: '90vw' },
            maxWidth: '1200px',
            margin: '0 auto 50px'
        }}>
            <FormControl 
            inputPlaceholder="Baptize your snippet"
            helperText="Name it like a variable: Keep it short, but self-explanatory."
            input={name}
            onInputChange={input => setName(input)} />
            <CodeEditor mode="javascript" />
        </Box>
    );
}

export default NewSnippetPage;