import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import type { MikroStyle } from '@paradeigma/graphql';

import MikroCode from './MikroCode';

// Remove the style property from the original type.
type UnstyledSyntaxHighlighterProps = {
    [K in keyof SyntaxHighlighterProps as Exclude<K, 'style'>]: SyntaxHighlighterProps[K];
};

export interface MikroCodeProps extends UnstyledSyntaxHighlighterProps {
    style: MikroStyle;
}

export default MikroCode;
