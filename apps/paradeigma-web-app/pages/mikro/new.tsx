import useNewMikroReducer from 'hooks/useNewMikroReducer';
import { getHookedSdk } from 'lib/graphql';
import type { FormEvent } from 'react';
import type { NextPage } from 'next';

import EditorSlide from 'components/new-mikro/EditorSlide';
import PreviewSlide from 'components/new-mikro/PreviewSlide';

const sdk = getHookedSdk();

// TODO: Add markdown support for the description
const NewMikroPage: NextPage = () => {
    const [state, dispatch] = useNewMikroReducer();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        void sdk.createMikro({
            name: state.name,
            description: state.description,
            content: state.content,
            language: state.language,
            style: state.style
        });
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

export default NewMikroPage;