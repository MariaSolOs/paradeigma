import { useTheme } from '@mui/material/styles';
import { MikroStyles } from '@paradeigma/graphql';
import type { FC } from 'react';
import type { PreviewSlideProps } from './index';

import SelectUnstyled from '@mui/base/SelectUnstyled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MikroCode from 'components/MikroCode';
import InputLabel from 'components/InputLabel';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/Select';
import * as S from './PreviewSlide.styled';

const PreviewSlide: FC<PreviewSlideProps> = (props) => {
    const theme = useTheme();

    return (
        <>
            <S.Slide>
                <S.CloseText onClick={props.onGoBack}>
                    <ArrowBackIcon sx={{ fontSize: '1.2rem' }} />
                    Not ready yet
                </S.CloseText>
                <S.Content>
                    <S.MikroName>{props.name}</S.MikroName>
                    <MikroCode 
                    content={props.content}
                    language={props.language}
                    style={props.style}
                    containerStyles={{
                        borderRadius: `${+theme.shape.borderRadius * 2}px`
                    }} />
                    <S.FormControl sx={{ flexDirection: 'row' }}>
                        <InputLabel>
                            Which style would you like your mikro to have?
                        </InputLabel>
                        <SelectUnstyled
                        components={{ 
                            Root: SelectRoot, 
                            Listbox: SelectListbox, 
                            Popper: SelectPopper
                        }}
                        value={props.style}
                        onChange={(_, value) => props.onStyleChange(value)}>
                            {MikroStyles.map(style =>
                                <SelectOption key={style} value={style}>
                                    {style}
                                </SelectOption>
                            )}
                        </SelectUnstyled>
                    </S.FormControl>
                </S.Content>
            </S.Slide>
            <S.Button type="submit">Done</S.Button>
        </>
    );
}

export default PreviewSlide;