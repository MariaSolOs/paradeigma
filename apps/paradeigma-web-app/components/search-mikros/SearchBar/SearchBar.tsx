import { forwardRef } from 'react';
import { getLanguageIcon } from 'lib/mikro';
import { ProgrammingLanguages } from '@paradeigma/graphql';
import useStyles from './SearchBar.styled';
import type { FC } from 'react';
import type { ProgrammingLanguage } from '@paradeigma/graphql';
import type { SearchBarProps, SelectItemProps } from './index';

import { InputBase, MultiSelect } from '@mantine/core';
import { IconZoomCode } from '@tabler/icons';

const SearchBar: FC<SearchBarProps> = (props) => {
    const { classes } = useStyles();

    const MultiSelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
        function MultiSelectItem({ label, icon, ...others }, ref) {
            return (
                <div ref={ref} {...others}>
                    <i className={`${icon} ${classes.languageIcon}`} />
                    {label}
                </div>
            );
        }
    );

    return (
        <div className={classes.bar}>
            <InputBase<'input'>
                placeholder="Find your paradeigmata."
                value={props.textFilter}
                onChange={event => props.onTextFilterChange(event.target.value)}
                icon={<IconZoomCode />}
            />
            <MultiSelect
                data={ProgrammingLanguages.map(language =>
                    ({
                        label: language,
                        value: language,
                        icon: getLanguageIcon(language)
                    }) as SelectItemProps
                )}
                itemComponent={MultiSelectItem}
                label="Search for mikros written in:"
                classNames={{
                    root: classes.selectRoot,
                    wrapper: classes.selectWrapper,
                    label: classes.selectLabel
                }}
                value={props.languageFilter}
                onChange={value => props.onLanguageFilterChange(value as ProgrammingLanguage[])}
            />
        </div>
    );
};

export default SearchBar;
