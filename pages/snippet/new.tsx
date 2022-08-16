import useNewSnippetReducer from 'hooks/useNewSnippetReducer';
import { getHookedSdk } from 'lib/graphql';
import type { FormEvent } from 'react';
import type { NextPage } from 'next';

import EditorSlide from 'components/new-snippet/FormSlides/EditorSlide';
import PreviewSlide from 'components/new-snippet/FormSlides/PreviewSlide';

const sdk = getHookedSdk();

// TODO: Add markdown support for the description
const NewSnippetPage: NextPage = () => {
    const [state, dispatch] = useNewSnippetReducer();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            {state.isInFirstSlide && 
                <EditorSlide
                name={state.name}
                description={state.description}
                language={state.language}
                content={state.content}
                onNameChange={name => dispatch({ type: 'SET_NAME', name })}
                onDescriptionChange={description => dispatch({ type: 'SET_DESCRIPTION', description })}
                onLanguageChange={language => dispatch({ type: 'SET_LANGUAGE', language })}
                onContentChange={content => dispatch({ type: 'SET_CONTENT', content })}
                onContinue={() => dispatch({ type: 'TOGGLE_SLIDE' })} />}
            {!state.isInFirstSlide && 
                <PreviewSlide
                name={state.name}
                language={state.language}
                content={state.content}
                style={state.style}
                onStyleChange={style => dispatch({ type: 'SET_STYLE', style })}
                onGoBack={() => dispatch({ type: 'TOGGLE_SLIDE' })} />}
        </form>
    );
}

export default NewSnippetPage;