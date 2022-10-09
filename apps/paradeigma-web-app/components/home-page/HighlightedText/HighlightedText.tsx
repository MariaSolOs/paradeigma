import type { FCC } from 'react';
import type { HighlightedTextProps } from './index';

import * as S from './HighlightedText.styled';

const HighlightedText: FCC<HighlightedTextProps> = (props) => {
    if (props.tooltipText) {
        return (
            <S.Tooltip 
            arrow 
            placement="top"
            title={props.tooltipText} 
            // After touching the text for 400ms, open the tooltip.
            enterTouchDelay={400}
            // Once the user stops touching the tooltip, wait 3s before closing it.
            leaveTouchDelay={3000}>
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