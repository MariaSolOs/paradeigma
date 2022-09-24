import type { BackdropProps } from '@mui/material/Backdrop';
import type { FC } from 'react';

import * as S from './Spinner.styled';

const Spinner: FC<BackdropProps> = (props) => (
    <S.Backdrop { ...props }>
        <S.Spinner />
    </S.Backdrop>
);

export default Spinner;