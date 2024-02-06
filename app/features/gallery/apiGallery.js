import { configureApi } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiClient } from '../../api';

export const apiGallery = apiClient.injectEndpoints({
  reducerPath: 'apiGallery',
  endpoints: (builder) => ({
    getTopImages: builder.query({
      query: (q) => `/gallery/top/week`
    }),
    searchImages: builder.query({
      query: (query) => `/gallery/search?q=${query}`,
    }),
    overrideExisting: false,
  }),
});

export const { useGetTopImagesQuery, useSearchImagesQuery } = apiGallery;

// export const selectTopImagesResult = apiGallery.endpoints.getTopImages.select()