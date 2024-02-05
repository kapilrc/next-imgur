'use client';
import Link from 'next/link';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Input, alpha, styled } from '@mui/material';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  '>a': {
    marginRight: theme.spacing(1.5),
    display: 'inline-block',
    ':hover': {
      textDecoration: 'underline'
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(5),
    }
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInput = styled(Input)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInput-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Link href="/" rel="preload">
            Imgur
          </Link>
          <Link href="/features/gallery" rel="preload">
            Gallery{' '}
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
