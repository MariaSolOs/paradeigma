import { useCallback } from 'react';
import { getLanguageIcon } from 'lib/mikro';
import { ProgrammingLanguages } from '@paradeigma/graphql';
import type { FC } from 'react';
import type { ProgrammingLanguage } from '@paradeigma/graphql';
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
            placeholder="Find your paradeigmata." 
            endAdornment={<S.SearchIcon />}
            value={props.query}
            onChange={event => props.onQueryChange(event.target.value)} />
            <S.SelectContainer>
                <InputLabel>Search for mikros written in: </InputLabel>
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
                            <Chip key={value} label={label} onDelete={() => handleChipDeletion(value)} />
                        )}
                    </S.ChipsContainer>
                }>
                    {ProgrammingLanguages.map(language => 
                        <S.SelectOption 
                        key={language} 
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