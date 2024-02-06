"use client";
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiGallery } from '../features/gallery/apiGallery';
import searchSliceReducer from './slices/searchSlice';
import gallerySliceReducer from './slices/gallerySlice';

export const store = configureStore({
  reducer: {
    [apiGallery.reducerPath]: apiGallery.reducer,
    search: searchSliceReducer,
    gallery: gallerySliceReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGallery.middleware),
  devTools: true
});

setupListeners(store.dispatch)
