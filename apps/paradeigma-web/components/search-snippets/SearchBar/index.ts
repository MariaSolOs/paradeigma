import type { ProgrammingLanguage } from 'graphql-server/sdk';

import SearchBar from './SearchBar';

export type SearchBarProps = {
    query: string;
    onQueryChange: (query: string) => void;
    languageFilter: ProgrammingLanguage[];
    onLanguageFilterChange: (filter: ProgrammingLanguage[]) => void;
}

export default SearchBar;