import { useReducer } from 'react';
import { MIKRO_DESCRIPTION_MAX_LENGTH, MIKRO_NAME_MAX_LENGTH, MikroStyle } from '@paradeigma/graphql';
import type { ProgrammingLanguage } from '@paradeigma/graphql';

type NewMikroFormState = {
    name: string;
    description: string;
    language: ProgrammingLanguage | undefined;
    content: string;
    style: MikroStyle;
    isSubmittingForm: boolean;
};

const initialState: NewMikroFormState = {
    name: '',
    description: '',
    language: undefined,
    content: '',
    style: MikroStyle.AtomDark,
    isSubmittingForm: false
} as const;

type Action =
    | { type: 'SET_NAME'; name: string }
    | { type: 'SET_DESCRIPTION'; description: string }
    | { type: 'SET_LANGUAGE'; language: ProgrammingLanguage }
    | { type: 'SET_CONTENT'; content: string }
    | { type: 'SET_STYLE'; style: MikroStyle | null }
    | { type: 'START_SUBMISSION' };

const reducer = (state: NewMikroFormState, action: Action): NewMikroFormState => {
    switch (action.type) {
        case 'SET_NAME': {
            return {
                ...state,
                ...(action.name.length <= MIKRO_NAME_MAX_LENGTH && {
                    name: action.name
                })
            };
        }
        case 'SET_DESCRIPTION': {
            return {
                ...state,
                ...(action.description.length <= MIKRO_DESCRIPTION_MAX_LENGTH && {
                    description: action.description
                })
            };
        }
        case 'SET_LANGUAGE': {
            return {
                ...state,
                language: action.language,
                content: ''
            };
        }
        case 'SET_CONTENT': {
            return {
                ...state,
                content: action.content
            };
        }
        case 'SET_STYLE': {
            return {
                ...state,
                ...(action.style !== null && {
                    style: action.style
                })
            };
        }
        case 'START_SUBMISSION': {
            return {
                ...state,
                isSubmittingForm: true
            };
        }
    }
};

const useNewMikroReducer = () => useReducer(reducer, initialState);

export default useNewMikroReducer;
