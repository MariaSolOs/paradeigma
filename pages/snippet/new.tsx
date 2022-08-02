import type { NextPage } from 'next';

import FormContainer from 'components/FormContainer';
import CodeEditor from 'components/CodeEditor';

const NewSnippetPage: NextPage = () => {
    return (
        <FormContainer>
            <CodeEditor mode="javascript" />
        </FormContainer>
    );
}

export default NewSnippetPage;