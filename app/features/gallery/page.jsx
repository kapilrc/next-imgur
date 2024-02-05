'use client'
import React, { useState } from 'react';
import { useGetTopImagesQuery, useSearchImagesQuery } from './apiGallery';
import ImageGallery from '@/app/components/ImageGallery';

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: topImages, isLoading, error } = useGetTopImagesQuery();
  const {
    data: searchResults,
    isLoading: isSearchLoading,
    isError: isSearchError
  } = useSearchImagesQuery(searchQuery, {
    skip: !searchQuery.length
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  function renderResult() {
    if (isLoading) return <p>Loading....</p>
    if (error) return <p>{JSON.stringify(error)}</p>
    if (topImages.data.length) {
      return <ImageGallery images={topImages.data} />
    }
    return null;
  }

  return (
    <div>
      {renderResult()}
    </div>
  )
};

export default GalleryPage;
