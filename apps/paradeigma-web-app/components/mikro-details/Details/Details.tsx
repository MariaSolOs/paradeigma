import { getLanguageIcon } from 'lib/mikro';
import type { FC } from 'react';
import type { DetailsProps } from './index';

import * as S from './Details.styled';

const Details: FC<DetailsProps> = (props) => (
    <S.Container>
        <S.LanguageIconContainer>
            <S.LanguageIcon className={getLanguageIcon(props.language)} />
        </S.LanguageIconContainer>
        <S.Name>{props.name}</S.Name>
        <S.Description>{props.description}</S.Description>
    </S.Container>
);

export default Details;
