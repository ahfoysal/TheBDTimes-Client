import { api } from '@/redux/api/apiSlice';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `auth/signup`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApi;
