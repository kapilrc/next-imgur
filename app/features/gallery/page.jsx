'use client'
import React, { useState } from 'react';
import { useSearchImagesQuery, useGetTopImagesQuery } from './apiGallery';
import GalleryGridView from '../../components/GalleryGridView';
import SearchBar from '../../components/SearchBar';
import Stack from '@mui/material/Stack';
import DisplayOptions from '../../components/DisplayOptions';
import GalleryListView from '../../components/GalleryListView';

const GalleryPage = () => {
  // input text
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // display -> list/grid
  const [displayType, setDisplayType] = useState('grid');
  const handleDisplayType = (event, newMode) => {
    setDisplayType(newMode);
  };

  // get images
  const { data, isLoading, error } = useSearchImagesQuery(searchTerm);


  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
       <SearchBar onSearch={handleSearch} />
        {data?.data?.length > 0 && 
          <DisplayOptions value={displayType} onChange={handleDisplayType} />
        }
      </Stack>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
      {displayType === 'list' && data && <GalleryListView data={data.data} />}
      {displayType === 'grid' && data && <GalleryGridView data={data.data} />}
    </div>
  )
};

export default GalleryPage;
