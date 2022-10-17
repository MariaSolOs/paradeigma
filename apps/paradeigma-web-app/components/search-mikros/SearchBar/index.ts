import type { ProgrammingLanguage } from '@paradeigma/graphql';

import SearchBar from './SearchBar';

export type SearchBarProps = {
    textFilter: string;
    onTextFilterChange: (filter: string) => void;
    languageFilter: ProgrammingLanguage[];
    onLanguageFilterChange: (filter: ProgrammingLanguage[]) => void;
};

export default SearchBar;
