import { SnippetStyle } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { PreviewSlideProps } from './index';

import SelectUnstyled from '@mui/base/SelectUnstyled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CodeSnippet from 'components/CodeSnippet/CodeSnippet';
import InputLabel from 'components/InputLabel';
import { 
    Root as SelectRoot,
    Listbox as SelectListbox,
    Popper as SelectPopper,
    Option as SelectOption
} from 'components/Select';
import * as S from './PreviewSlide.styled';

const PreviewSlide: FC<PreviewSlideProps> = (props) => (
    <>
        <S.Slide>
            <S.CloseText onClick={props.onGoBack}>
                <ArrowBackIcon sx={{ fontSize: '1.2rem' }} />
                Not ready yet
            </S.CloseText>
            <S.Content>
                <S.SnippetName>{props.name}</S.SnippetName>
                <CodeSnippet 
                content={props.content} 
                language={props.language} 
                style={props.style} />
                <S.FormControl sx={{ flexDirection: 'row' }}>
                    <InputLabel>
                        Which style would you like your snippet to have?
                    </InputLabel>
                    <SelectUnstyled
                    components={{ 
                        Root: SelectRoot, 
                        Listbox: SelectListbox, 
                        Popper: SelectPopper
                    }}
                    value={props.style}
                    onChange={props.onStyleChange}>
                        {Object.values(SnippetStyle).map(style =>
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

export default PreviewSlide;