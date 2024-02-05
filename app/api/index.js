import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_IMGUR_BASEURL,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`);
    return headers
  }
});

export const apiClient = createApi({
  baseQuery,
  endpoints: builder => ({})
})