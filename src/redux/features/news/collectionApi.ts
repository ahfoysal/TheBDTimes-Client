import { api } from '@/redux/api/apiSlice';

const collectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchCollection: builder.query({
      query: (args) => {
        console.log(args);
        return { url: `collection/${args}?start_from=0&per_page=15` };
      },
    }),
    fetchDetails: builder.query({
      query: (args) => {
        console.log(args);
        return { url: `info/${args}` };
      },
    }),
  }),
});

export const { useFetchCollectionQuery, useFetchDetailsQuery } = collectionApi;
