import type { UseFormReturnType } from '@mantine/form';
import type { ProgrammingLanguage } from '@paradeigma/graphql';

import SearchBar from './SearchBar';

export type SearchBarFormValues = {
    textFilter: string;
    languageFilter: ProgrammingLanguage[];
};

export type SearchBarProps = {
    form: UseFormReturnType<SearchBarFormValues>;
};

export default SearchBar;
