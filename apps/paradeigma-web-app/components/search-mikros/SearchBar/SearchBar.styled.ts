import { styled } from '@mui/material/styles';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Listbox as SelectListboxBase, Option as SelectOptionBase, Root as SelectRootBase } from 'components/Select';

export const Container = styled('div')(({ theme }) => ({
    width: '60vw',
    maxWidth: 800,
    margin: '0 auto',

    [theme.breakpoints.down('md')]: { width: '90vw' }
}));

export const SelectContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    marginTop: '1.5rem',
    width: '100%',

    [theme.breakpoints.down('sm')]: { flexDirection: 'column' }
}));

export const SelectRoot = styled(SelectRootBase, {
    shouldForwardProp: (prop) => prop !== 'renderValue'
})(({ theme }) => ({
    width: '60%',
    minWidth: 350,
    height: 'auto',
    minHeight: 44.59,

    [theme.breakpoints.down('sm')]: {
        width: '100%',
        minWidth: 0,
        marginTop: '0.5rem'
    }
}));

export const SelectListbox = styled(SelectListboxBase)(({ theme }) => ({
    width: '60%',
    minWidth: 350,

    [theme.breakpoints.down('sm')]: { minWidth: 150 }
}));

export const SelectOption = styled(SelectOptionBase)(({ disabled }) => ({
    fontSize: '0.8rem',

    ...(disabled === true && { opacity: 0.4 })
}));

export const ChipsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.25rem'
});

export const SearchIcon = styled(SearchOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primary.main
}));

export const LanguageIcon = styled('i')({
    fontSize: '0.85rem',
    marginLeft: '0.5rem'
});
