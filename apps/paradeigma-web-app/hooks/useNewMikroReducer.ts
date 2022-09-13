import { useReducer, useCallback } from 'react';
import { ProgrammingLanguage, MikroStyle, MIKRO_NAME_MAX_LENGTH, MIKRO_DESCRIPTION_MAX_LENGTH } from '@paradeigma/graphql';

type MikroState = {
    name: string;
    description: string;
    language: ProgrammingLanguage;
    content: string;
    style: MikroStyle;
    isInFirstSlide: boolean;
}

const initialState: MikroState = {
    name: '',
    description: '',
    language: ProgrammingLanguage.Javascript,
    content: '',
    style: MikroStyle.AtomDark,
    isInFirstSlide: true
} as const;

type Action = 
| { type: 'SET_NAME'; name: string; }
| { type: 'SET_DESCRIPTION'; description: string; }
| { type: 'SET_LANGUAGE'; language: ProgrammingLanguage | null; }
| { type: 'SET_CONTENT'; content: string; }
| { type: 'SET_STYLE'; style: MikroStyle | null; }
| { type: 'TOGGLE_SLIDE'; };

export default function useNewMikroReducer() {
    const reducer = useCallback((state: MikroState, action: Action): MikroState => {
        switch (action.type) {
            case 'SET_NAME': {
                return {
                    ...state,
                    isInFirstSlide: true,
                    ...action.name.length <= MIKRO_NAME_MAX_LENGTH && {
                        name: action.name
                    }
                }
            }
            case 'SET_DESCRIPTION': {
                return {
                    ...state,
                    isInFirstSlide: true,
                    ...action.description.length <= MIKRO_DESCRIPTION_MAX_LENGTH && {
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