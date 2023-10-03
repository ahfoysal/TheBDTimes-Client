import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.rokomari.com/data/elastic-autocomplete/',
  }),

  endpoints: () => ({}),
});
