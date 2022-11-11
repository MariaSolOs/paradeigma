import { ProgrammingLanguages } from '@paradeigma/graphql';
import useStyles from './SearchBar.styled';
import type { FC } from 'react';
import type { ProgrammingLanguage } from '@paradeigma/graphql';
import type { SearchBarProps } from './index';

import { InputBase, MultiSelect } from '@mantine/core';
import { IconZoomCode } from '@tabler/icons';
import LanguageSelectItem from 'components/LanguageSelectItem';

const SearchBar: FC<SearchBarProps> = (props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.bar}>
            <InputBase<'input'>
                placeholder="Find your paradeigmata."
                value={props.textFilter}
                onChange={(event) => props.onTextFilterChange(event.target.value)}
                icon={<IconZoomCode />}
            />
            <MultiSelect
                data={ProgrammingLanguages}
                itemComponent={LanguageSelectItem}
                label="Search for mikros written in:"
                classNames={{
                    root: classes.selectRoot,
                    wrapper: classes.selectWrapper,
                    label: classes.selectLabel
                }}
                value={props.languageFilter}
                onChange={(value) => props.onLanguageFilterChange(value as ProgrammingLanguage[])}
            />
        </div>
    );
};

export default SearchBar;
