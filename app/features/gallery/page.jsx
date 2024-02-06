'use client'
import React, { useEffect, useState } from 'react';
import { useSearchImagesQuery, useGetTopImagesQuery } from './apiGallery';
import GalleryGridView from '../../components/GalleryGridView';
import SearchBar from '../../components/SearchBar';
import Stack from '@mui/material/Stack';
import DisplayOptions from '../../components/DisplayOptions';
import GalleryListView from '../../components/GalleryListView';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuery } from '../../redux/slices/searchSlice';
import { GalleryLoading } from '../../components/Skeleton';
import { selectCurrentGallery, setGallery } from '../../redux/slices/gallerySlice';
import useDebounce from '../../hooks/useDebounce';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectCurrentQuery);
  const gallery = useSelector(selectCurrentGallery);

  const debouncedInput = useDebounce(query, 500);

  // display -> list/grid toggle
  const [displayType, setDisplayType] = useState('grid');
  const handleDisplayType = (event, newMode) => {
    setDisplayType(newMode);
  };

  // get images
  const { data: topImages, isLoading } = useGetTopImagesQuery();
  const { data: searchResults, isLoading: searchLoading } = useSearchImagesQuery(debouncedInput, {
    skip: !debouncedInput.length
  });

  useEffect(() => {
    // Update image gallery state default to top/week
    !query &&  dispatch(setGallery(topImages?.data));
    // !query && setImageGallery(topImages?.data)
  }, [topImages, query, dispatch]);

  useEffect(() => {
    // Update image gallery state post search
    // setImageGallery(searchResults?.data);
    dispatch(setGallery(searchResults?.data));
  }, [searchResults, dispatch]);

  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
       <SearchBar placeholder="Search images..." />
        {gallery?.length > 0 && 
          <DisplayOptions value={displayType} onChange={handleDisplayType} />
        }
      </Stack>
      {!query && (isLoading || searchLoading) && <GalleryLoading />}
      {/* {error && <p>Error: {error.message}</p>} */}

      {!query || (!searchLoading && !gallery?.length) && (
        <p>No results found!</p>
      )}
      
      {displayType === 'list' && <GalleryListView data={gallery} />}
      {displayType === 'grid' && <GalleryGridView data={gallery} />}
    </div>
  )
};

export default GalleryPage;
