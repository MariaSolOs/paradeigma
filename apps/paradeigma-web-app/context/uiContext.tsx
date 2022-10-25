import { createContext, useContext, useReducer } from 'react';
import type { Dispatch, FCC, ReactNode } from 'react';

type UiState = {
    snackbarContent: ReactNode | undefined;
};

const initialState: UiState = {
    snackbarContent: undefined
};

type Action = { type: 'OPEN_SNACKBAR'; content: ReactNode } | { type: 'CLOSE_SNACKBAR' };

type UiContextType = {
    uiState: UiState;
    uiDispatch: Dispatch<Action>;
};

const reducer = (state: UiState, action: Action): UiState => {
    switch (action.type) {
        case 'OPEN_SNACKBAR': {
            return {
                ...state,
                snackbarContent: action.content
            };
        }
        case 'CLOSE_SNACKBAR': {
            return {
                ...state,
                snackbarContent: undefined
            };
        }
    }
};

const UiContext = createContext<UiContextType>({
    uiState: initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    uiDispatch: () => {}
});

export const UiContextProvider: FCC = (props) => {
    const [uiState, uiDispatch] = useReducer(reducer, initialState);

    return <UiContext.Provider value={{ uiState, uiDispatch }}>{props.children}</UiContext.Provider>;
};

const useUiContext = () => useContext(UiContext);

export default useUiContext;
