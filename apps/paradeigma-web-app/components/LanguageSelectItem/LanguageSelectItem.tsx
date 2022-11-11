import { forwardRef } from 'react';
import { getLanguageIcon } from 'lib/mikro';
import useStyles from './LanguageSelectItem.styles';
import type { ProgrammingLanguage } from '@paradeigma/graphql';
import type { LanguageSelectItemProps } from './index';

const LanguageSelectItem = forwardRef<HTMLDivElement, LanguageSelectItemProps>(
    function LanguageSelectItem({ value, label, ...others }, ref) {
        const { classes, cx } = useStyles();

        const icon = getLanguageIcon(value as ProgrammingLanguage);

        return (
            <div ref={ref} {...others}>
                <i className={cx(icon, classes.icon)} />
                {label}
            </div>
        );
    }
);

export default LanguageSelectItem;
