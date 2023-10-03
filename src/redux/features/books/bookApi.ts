import { api } from '@/redux/api/apiSlice';

const book = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchBook: builder.query({
      query: ({ id, name }) => {
        // const { term } = args;
        console.log({ id, name });
        return { url: `books/detail/${id}/${name}` };
      },
    }),
  }),
});

export const { useFetchBookQuery } = book;
