import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import authSlice from './features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import searchSlice from './features/search/searchSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    search: searchSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
setupListeners(store.dispatch);
