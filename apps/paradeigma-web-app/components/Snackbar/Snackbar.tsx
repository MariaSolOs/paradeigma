import useUiContext from 'context/uiContext';

import MuiSnackbar from '@mui/material/Snackbar';
import * as S from './Snackbar.styled';

const Snackbar = () => {
    const { uiState, uiDispatch } = useUiContext();

    return (
        <MuiSnackbar 
        open={uiState.snackbarContent !== undefined}
        autoHideDuration={5000} 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => uiDispatch({ type: 'CLOSE_SNACKBAR' })}>
            <S.SnackbarContent message={uiState.snackbarContent} elevation={0} />
        </MuiSnackbar>
    );
}

export default Snackbar;