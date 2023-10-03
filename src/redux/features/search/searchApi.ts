import { api } from '@/redux/api/apiSlice';

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query({
      query: (args) => {
        // const { term } = args;
        console.log(args);
        return { url: `/books/search?term=${args}` };
      },
    }),
  }),
});

export const { useSearchQuery } = searchApi;
