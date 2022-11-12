import { ProgrammingLanguages } from '@paradeigma/graphql';
import useStyles from './SearchBar.styled';
import type { FC } from 'react';
import type { SearchBarProps } from './index';

import { InputBase, MultiSelect } from '@mantine/core';
import { IconZoomCode } from '@tabler/icons';
import LanguageSelectItem from 'components/LanguageSelectItem';

const SearchBar: FC<SearchBarProps> = (props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.bar}>
            <InputBase<'input'>
                {...props.form.getInputProps('textFilter')}
                placeholder="Find your paradeigmata."
                icon={<IconZoomCode />}
            />
            <MultiSelect
                {...props.form.getInputProps('languageFilter')}
                data={ProgrammingLanguages}
                itemComponent={LanguageSelectItem}
                label="Search for mikros written in:"
                classNames={{
                    root: classes.selectRoot,
                    wrapper: classes.selectWrapper,
                    label: classes.selectLabel
                }}
            />
        </div>
    );
};

export default SearchBar;
