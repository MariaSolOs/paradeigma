import type { CSSProperties } from 'react';
import type { ProgrammingLanguage, MikroStyle } from '@paradeigma/graphql';

import MikroCode from './MikroCode';

export type MikroCodeProps = {
    content: string;
    language: ProgrammingLanguage;
    style: MikroStyle;
    containerStyles?: CSSProperties;
};

export default MikroCode;
