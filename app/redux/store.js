"use client";
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiGallery } from '../features/gallery/apiGallery';

export const store = configureStore({
  reducer: {
    [apiGallery.reducerPath]: apiGallery.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGallery.middleware),
  devTools: true
});

setupListeners(store.dispatch)
