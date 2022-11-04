import type { ProgrammingLanguage } from '@paradeigma/graphql';
import type { SelectItem } from '@mantine/core';
import type { ComponentPropsWithoutRef } from 'react';

import SearchBar from './SearchBar';

export type SearchBarProps = {
    textFilter: string;
    onTextFilterChange: (filter: string) => void;
    languageFilter: ProgrammingLanguage[];
    onLanguageFilterChange: (filter: ProgrammingLanguage[]) => void;
};

export interface SelectItemProps extends SelectItem, ComponentPropsWithoutRef<'div'> {
    icon: string;
}

export default SearchBar;
