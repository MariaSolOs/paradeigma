import { getLanguageIcon } from 'lib/mikro';
import type { FC } from 'react';
import type { DetailsProps } from './index';

import MikroCode from 'components/MikroCode';
import * as S from './Details.styled';

const Details: FC<DetailsProps> = (props) => (
    <S.Container>
        <S.MikroContainer>
            <MikroCode
            content={props.mikro.content}
            language={props.mikro.language}
            style={props.mikro.style}
            containerStyles={{
                width: '100%',
                margin: 0
            }} />
        </S.MikroContainer>
        <S.TextContainer>
            <S.LanguageIconContainer>
                <S.LanguageIcon className={getLanguageIcon(props.mikro.language)} />
            </S.LanguageIconContainer>
            <S.Name>{props.mikro.name}</S.Name>
            <S.Description>{props.mikro.description}</S.Description>
        </S.TextContainer>
    </S.Container>
);

export default Details;