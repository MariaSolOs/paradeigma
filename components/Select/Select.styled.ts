import { styled } from '@mui/material/styles';

import OptionUnstyled from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';

export const Root = styled('button')(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: +theme.shape.borderRadius * 2,
    padding: '8px 8px 9px',
    height: 42,
    fontFamily: theme.typography.mono.fontFamily,
    color: theme.palette.primary.dark,
    backgroundColor: 'transparent',
    width: 150,
    marginLeft: 'auto'
}));

export const Listbox = styled('ul')(({ theme }) => ({
    border: `1px dashed ${theme.palette.primary.light}`,
    borderRadius: +theme.shape.borderRadius * 2,
    listStyle: 'none',
    padding: '0.3rem 0.5rem',
    margin: '0.5rem 0',
    width: 150,
    backgroundColor: '#FFF'
}));

export const Popper = styled(PopperUnstyled)({ zIndex: 1 });

export const Option = styled(OptionUnstyled)(({ theme }) => ({
    fontSize: '0.75rem',
    cursor: 'pointer',
    textAlign: 'center',
    paddingBottom: 5,

    ':hover': { fontWeight: theme.typography.fontWeightBold }
}));