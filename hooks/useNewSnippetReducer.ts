import { useReducer, useCallback } from 'react';
import type { Language } from 'models/snippet';

type SnippetState = {
    name: string;
    description: string;
    language: Language;
    isInEditorSlide: boolean;
}

const initialState: SnippetState = {
    name: '',
    description: '',
    language: 'javascript',
    isInEditorSlide: true
} as const;

type Action = 
| { type: 'SET_NAME'; name: string; }
| { type: 'SET_DESCRIPTION'; description: string; }
| { type: 'SET_LANGUAGE'; language: Language | null; };

// TODO: Check if the max lengths are appropriate
const NAME_MAX_LENGTH = 30;
const DESCRIPTION_MAX_LENGTH = 100;

export default function useNewSnippetReducer() {
    const reducer = useCallback((state: SnippetState, action: Action): SnippetState => {
        switch (action.type) {
            case 'SET_NAME': {
                return {
                    ...state,
                    isInEditorSlide: true,
                    ...action.name.length <= NAME_MAX_LENGTH && {
                        name: action.name
                    }
                }
            }
            case 'SET_DESCRIPTION': {
                return {
                    ...state,
                    isInEditorSlide: true,
                    ...action.description.length <= DESCRIPTION_MAX_LENGTH && {
                        description: action.description
                    }
                }
            }
            case 'SET_LANGUAGE': {
                return {
                    ...state,
                    isInEditorSlide: true,
                    ...action.language !== null && {
                        language: action.language
                    }
                }
            }
            default: return state;
        }
    }, []);

    return useReducer(reducer, initialState);
}