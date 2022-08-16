import { v4 as uuid } from 'uuid';
import { SnippetStyle } from 'graphql-server/sdk';
import type { FC } from 'react';
import type { PreviewSlideProps } from './index';

import SelectUnstyled from '@mui/base/SelectUnstyled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CodeSnippet from 'components/CodeSnippet/CodeSnippet';
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
            <S.SnippetContainer>
                <S.SnippetName>{props.name}</S.SnippetName>
                <CodeSnippet 
                content={props.content} 
                language={props.language} 
                style={props.style} />
                <S.FormControl sx={{ flexDirection: 'row' }}>
                    <S.FormLabel>
                        Which style would you like your snippet to have?
                    </S.FormLabel>
                    <SelectUnstyled
                    components={{ 
                        Root: SelectRoot, 
                        Listbox: SelectListbox, 
                        Popper: SelectPopper
                    }}
                    value={props.style}
                    onChange={props.onStyleChange}>
                        {Object.values(SnippetStyle).map(style =>
                            <SelectOption key={uuid()} value={style}>
                                {style}
                            </SelectOption>
                        )}
                    </SelectUnstyled>
                </S.FormControl>
            </S.SnippetContainer>
        </S.Slide>
        <S.Button type="submit">Done</S.Button>
    </>
);

export default PreviewSlide;