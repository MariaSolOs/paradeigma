import type { FCC } from 'react';
import type { DetailsProps } from './index';

import * as S from './Details.styled';

const Details: FCC<DetailsProps> = (props) => {
    return (
        <S.Container>
            <S.MikroContainer>
                {props.children}
            </S.MikroContainer>
            <S.TextContainer>
                <S.Name>{props.name}</S.Name>
                <S.Description>{props.description}</S.Description>
            </S.TextContainer>
        </S.Container>
    );
}

export default Details;