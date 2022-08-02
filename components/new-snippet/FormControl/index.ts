import FormControl from './FormControl';

export type FormControlProps = {
    inputPlaceholder: string;
    helperText: string;
    input: string;
    onInputChange: (input: string) => void;
}

export default FormControl;