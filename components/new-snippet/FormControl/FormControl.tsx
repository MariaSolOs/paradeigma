import type { FC } from 'react';
import type { FormControlProps } from './index';
 
import InputField from 'components/InputField';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import * as S from './FormControl.styled';

const FormControl: FC<FormControlProps> = (props) => (
    <S.Control>
        <InputField placeholder={props.inputPlaceholder} />
        <S.HelperText>
            <TungstenOutlinedIcon /> {props.helperText}
        </S.HelperText>
    </S.Control>
);

export default FormControl;