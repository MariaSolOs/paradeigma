import { useReducer, useCallback } from 'react';
import type { Language } from 'models/snippet';

type SnippetState = {
    name: string;
    description: string;
    language: Language;
    content: string;
    isInEditorSlide: boolean;
}

const initialState: SnippetState = {
    name: '',
    description: '',
    language: 'javascript',
    content: '',
    isInEditorSlide: true
} as const;

type Action = 
| { type: 'SET_NAME'; name: string; }
| { type: 'SET_DESCRIPTION'; description: string; }
| { type: 'SET_LANGUAGE'; language: Language | null; }
| { type: 'SET_CONTENT'; content: string; }
| { type: 'TOGGLE_SLIDE'; };

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
                        language: action.language,
                        content: ''
                    }
                }
            }
            case 'SET_CONTENT': {
                return {
                    ...state,
                    isInEditorSlide: true,
                    content: action.content
                }
            }
            case 'TOGGLE_SLIDE': {
                return {
                    ...state,
                    isInEditorSlide: !state.isInEditorSlide
                }
            }
            default: return state;
        }
    }, []);

    return useReducer(reducer, initialState);
}