import { styled } from '@mui/material/styles';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { 
    Root as SelectRootBase,
    Listbox as SelectListboxBase,
    Option as SelectOptionBase
} from 'components/Select';

export const Container = styled('div')(({ theme }) => ({
    width: '60vw', 
    maxWidth: 800, 
    margin: '0 auto',

    [theme.breakpoints.down('md')]: { width: '90vw' }
}));

export const SelectContainer = styled('div')({
    display: 'flex', 
    marginTop: '1.5rem', 
    width: '100%'
});

export const SelectRoot = styled(SelectRootBase)(({ theme }) => ({
    width: '60%',
    minWidth: 350,
    
    [theme.breakpoints.down('sm')]: { minWidth: 150 }
}));

export const SelectListbox = styled(SelectListboxBase)(({ theme }) => ({
    width: '60%',
    minWidth: 350,
    
    [theme.breakpoints.down('sm')]: { minWidth: 150 }
}));

export const SelectOption = styled(SelectOptionBase)({ fontSize: '0.8rem' });

export const SearchIcon = styled(SearchOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primary.main
}));

export const LanguageIcon = styled('i')({
    fontSize: '0.85rem', 
    marginLeft: '0.5rem' 
});