import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import { alpha, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuery, setQuery } from '../redux/slices/searchSlice';

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
  '& .MuiInput-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(4),
  },
}));

const SearchBar = ({ placeholder = "Search for images...", onSearch }) => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectCurrentQuery);

  const [input, setInput] = useState(inputValue);

  useEffect(() => {
    dispatch(setQuery(input));
  }, [dispatch, input]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBar;