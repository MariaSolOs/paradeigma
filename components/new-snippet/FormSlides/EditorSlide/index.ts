import type { ProgrammingLanguage } from 'graphql-server/sdk';

import EditorSlide from './EditorSlide';

export type EditorSlideProps = {
    name: string;
    description: string;
    language: ProgrammingLanguage;
    content: string;
    onNameChange: (name: string) => void;
    onDescriptionChange: (description: string) => void;
    onLanguageChange: (language: ProgrammingLanguage | null) => void;
    onContentChange: (content: string) => void;
    onContinue: () => void;
}

export default EditorSlide;