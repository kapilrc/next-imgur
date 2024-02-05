import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import { alpha, styled } from '@mui/material';
import useDebounce from '../hooks/useDebounce';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  top: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInput = styled(Input)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInput-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
}));

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    // if (debouncedInput) {
      onSearch(debouncedInput);
    // }
  }, [debouncedInput, onSearch]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput
        value={input}
        placeholder="Search for images..."
        onChange={(e) => setInput(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBar;