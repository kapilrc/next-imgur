import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gallery: []
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGallery: (state, action) => {
      state.gallery = action.payload;
    }
  },
});

export const { setGallery } = gallerySlice.actions;

export default gallerySlice.reducer;
export const selectCurrentGallery = (state) => state.gallery.gallery