import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  term: string | null;
  authorIds?: string[] | null;
  genres?: string[] | null;
  results?: ISearchResult[];
}
export interface ISearchResult {
  name: string;
  id: string;
  img?: string;
}

const initialState: ISearchState = {
  term: null,
  authorIds: [],
  genres: [],
  results: [],
};

const searchSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    setAuthorId: (state, action: PayloadAction<string[]>) => {
      state.authorIds = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<ISearchResult[]>) => {
      state.results = action.payload;
    },
  },
});
export const { setTerm, setAuthorId, setSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
