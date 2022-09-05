import type { ProgrammingLanguage } from '@paradeigma/paradeigma-graphql/sdk';

import SearchBar from './SearchBar';

export type SearchBarProps = {
    query: string;
    onQueryChange: (query: string) => void;
    languageFilter: ProgrammingLanguage[];
    onLanguageFilterChange: (filter: ProgrammingLanguage[]) => void;
}

export default SearchBar;