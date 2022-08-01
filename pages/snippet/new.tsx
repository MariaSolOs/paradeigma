import type { NextPage } from 'next';

import FormContainer from 'components/new-snippet/FormContainer';
import CodeEditor from 'components/new-snippet/CodeEditor';

const NewSnippetPage: NextPage = () => {
    return (
        <FormContainer>
            <CodeEditor mode="javascript" />
        </FormContainer>
    );
}

export default NewSnippetPage;