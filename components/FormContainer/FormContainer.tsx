import type { FCC } from 'react';

import * as S from './FormContainer.styled';

const FormContainer: FCC = (props) => (
    <S.Container>
        {props.children}
    </S.Container>
);

export default FormContainer;