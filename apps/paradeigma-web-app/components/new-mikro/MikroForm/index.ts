import type { ProgrammingLanguage } from '@paradeigma/graphql';

import MikroForm from './MikroForm';

export type MikroFormProps = {
    name: string;
    description: string;
    language: ProgrammingLanguage | undefined;
    onNameChange: (name: string) => void;
    onDescriptionChange: (description: string) => void;
    onLanguageChange: (language: ProgrammingLanguage) => void;
};

export default MikroForm;
