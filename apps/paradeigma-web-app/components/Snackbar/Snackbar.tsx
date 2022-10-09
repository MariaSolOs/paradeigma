import MuiSnackbar from '@mui/material/Snackbar';
import * as S from './Snackbar.styled';

const Snackbar = () => {
    return (
        <MuiSnackbar autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <S.SnackbarContent message={<>Mikro created! 🥳</>} elevation={0} />
        </MuiSnackbar>
    );
}

export default Snackbar;