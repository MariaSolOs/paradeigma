import type { UseFormReturnType } from '@mantine/form';
import type { MikroStyle, ProgrammingLanguage } from '@paradeigma/graphql';

import MikroForm from './MikroForm';

export type MikroFormValues = {
    name: string;
    description: string;
    language: ProgrammingLanguage | undefined;
    content: string;
    style: MikroStyle;
};

export type MikroFormProps = {
    form: UseFormReturnType<MikroFormValues>;
};

export default MikroForm;
