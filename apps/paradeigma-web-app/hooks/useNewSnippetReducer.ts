import { useReducer, useCallback } from 'react';
import { ProgrammingLanguage, SnippetStyle } from '@paradeigma-graphql';

const NAME_MAX_LENGTH = 30;
const DESCRIPTION_MAX_LENGTH = 100;

type SnippetState = {
    name: string;
    description: string;
    language: ProgrammingLanguage;
    content: string;
    style: SnippetStyle;
    isInFirstSlide: boolean;
}

const initialState: SnippetState = {
    name: '',
    description: '',
    language: ProgrammingLanguage.Javascript,
    content: '',
    style: SnippetStyle.AtomDark,
    isInFirstSlide: true
} as const;

type Action = 
| { type: 'SET_NAME'; name: string; }
| { type: 'SET_DESCRIPTION'; description: string; }
| { type: 'SET_LANGUAGE'; language: ProgrammingLanguage | null; }
| { type: 'SET_CONTENT'; content: string; }
| { type: 'SET_STYLE'; style: SnippetStyle | null; }
| { type: 'TOGGLE_SLIDE'; };

export default function useNewSnippetReducer() {
    const reducer = useCallback((state: SnippetState, action: Action): SnippetState => {
        switch (action.type) {
            case 'SET_NAME': {
                return {
                    ...state,
                    isInFirstSlide: true,
                    ...action.name.length <= NAME_MAX_LENGTH && {
                        name: action.name
                    }
                }
            }
            case 'SET_DESCRIPTION': {
                return {
                    ...state,
                    isInFirstSlide: true,
                    ...action.description.length <= DESCRIPTION_MAX_LENGTH && {
                        description: action.description
                    }
                }
            }
            case 'SET_LANGUAGE': {
                return {
                    ...state,
                    isInFirstSlide: true,
                    ...action.language !== null && {
                        language: action.language,
                        content: ''
                    }
                }
            }
            case 'SET_CONTENT': {
                return {
                    ...state,
                    isInFirstSlide: true,
                    content: action.content
                }
            }
            case 'SET_STYLE': {
                return {
                    ...state,
                    isInFirstSlide: false,
                    ...action.style !== null && {
                        style: action.style
                    }
                }
            }
            case 'TOGGLE_SLIDE': {
                return {
                    ...state,
                    isInFirstSlide: !state.isInFirstSlide
                }
            }
            default: return state;
        }
    }, []);

    return useReducer(reducer, initialState);
}