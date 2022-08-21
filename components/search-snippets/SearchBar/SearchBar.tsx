import { v4 as uuid } from 'uuid';
import { getLanguageIcon } from 'lib/snippet';
import { ProgrammingLanguage } from 'graphql-server/sdk';

import Chip from '@mui/material/Chip';
import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';
import Input from 'components/Input';
import InputLabel from 'components/InputLabel';
import { Popper as SelectPopper } from 'components/Select';
import * as S from './SearchBar.styled';

const SearchBar = () => {
    return (
        <S.Container>
            <Input 
            fullWidth
            placeholder="Explore the snippetverse." 
            endAdornment={<S.SearchIcon />} />
            <S.SelectContainer>
                <InputLabel>Search for snippets written in: </InputLabel>
                <MultiSelectUnstyled 
                components={{
                    Root: S.SelectRoot,
                    Listbox: S.SelectListbox,
                    Popper: SelectPopper
                }}
                componentsProps={{ popper: { placement: 'bottom-end' }}}
                renderValue={options => 
                    <S.ChipsContainer>
                        {options.map(({ label }) => <Chip key={uuid()} label={label} />)}
                    </S.ChipsContainer>
                }>
                    {Object.values(ProgrammingLanguage).map(language =>
                        <S.SelectOption key={uuid()} value={language}>
                            {language}
                            <S.LanguageIcon className={getLanguageIcon(language)} />
                        </S.SelectOption>
                    )}
                </MultiSelectUnstyled>
            </S.SelectContainer>
        </S.Container>
    );
}

export default SearchBar;