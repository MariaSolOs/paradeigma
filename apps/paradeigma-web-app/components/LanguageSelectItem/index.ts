import type { SelectItem } from '@mantine/core';
import type { ComponentPropsWithoutRef } from 'react';

import LanguageSelectItem from './LanguageSelectItem';

export interface LanguageSelectItemProps extends SelectItem, ComponentPropsWithoutRef<'div'> {
}

export default LanguageSelectItem;
