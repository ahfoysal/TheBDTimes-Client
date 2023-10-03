import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pewds.vercel.app/prothomalo/',
    // prepareHeaders: (headers, {getState}) => {
    //   const {auth :{
    //     accessToken
    //   } } = getState()
    //   headers.set('Authorization',  accessToken)
    //   console.log(accessToken, 's')
    //   return headers
    // }
  }),

  // baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.31.60:5000/api/v1/' }),
  tagTypes: ['news', 'auth'],

  endpoints: () => ({}),
});
