import type { FCC } from 'react';
import type { HighlightedTextProps } from './index';

import * as S from './HighlightedText.styled';

const HighlightedText: FCC<HighlightedTextProps> = (props) => {
    if (props.tooltipText) {
        return (
            <S.Tooltip title={props.tooltipText} arrow placement="top">
                <S.Text>
                    {props.children}<S.Asterisk>*</S.Asterisk>
                </S.Text>
            </S.Tooltip>
        );
    } else {
        return (
            <S.Text>{props.children}</S.Text>
        );
    }

}

export default HighlightedText;