import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { getLanguageIcon } from 'lib/snippet';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { SearchBarProps } from './index';

import Chip from '@mui/material/Chip';
import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';
import Input from 'components/Input';
import InputLabel from 'components/InputLabel';
import { Popper as SelectPopper } from 'components/Select';
import * as S from './SearchBar.styled';

const SearchBar: FC<SearchBarProps> = (props) => {
    const { onLanguageFilterChange } = props;

    const handleChipDeletion = useCallback((chipLanguage: ProgrammingLanguage) => {
        const filteredLanguages = props.languageFilter.filter(lang => lang !== chipLanguage);
        onLanguageFilterChange(filteredLanguages);
    }, [props.languageFilter, onLanguageFilterChange]);

    return (
        <S.Container>
            <Input 
            fullWidth
            placeholder="Explore the snippetverse." 
            endAdornment={<S.SearchIcon />}
            value={props.query}
            onChange={event => props.onQueryChange(event.target.value)} />
            <S.SelectContainer>
                <InputLabel>Search for snippets written in: </InputLabel>
                <MultiSelectUnstyled 
                value={props.languageFilter}
                onChange={onLanguageFilterChange}
                components={{
                    Root: S.SelectRoot,
                    Listbox: S.SelectListbox,
                    Popper: SelectPopper
                }}
                componentsProps={{ popper: { placement: 'bottom-end' }}}
                renderValue={options => 
                    <S.ChipsContainer>
                        {options.map(({ label, value }) => 
                            <Chip key={uuid()} label={label} onDelete={() => handleChipDeletion(value)} />
                        )}
                    </S.ChipsContainer>
                }>
                    {Object.values(ProgrammingLanguage).map(language => 
                        <S.SelectOption 
                        key={uuid()} 
                        value={language}
                        disabled={props.languageFilter.includes(language)}>
                            {language}
                            <S.LanguageIcon className={getLanguageIcon(language)} />
                        </S.SelectOption>)}
                </MultiSelectUnstyled>
            </S.SelectContainer>
        </S.Container>
    );
} 

export default SearchBar;