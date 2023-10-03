import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUser {
  _id: string | null;
  id: string | null;
  userName: string | null;
  role: string | null;
  email: string | null;
  profileImage?: string | null;
  myBooks?: [];
  bookmark?: [];
  currentlyReading?: [];
  finishedReading?: [];
  planToRead?: [];
}

export interface IUserState {
    user: IUser;
    accessToken: string | null;
}

const initialState: IUserState = {
  user:{
    id: null,
  _id: null,
  userName: null,
  role: null,
  email: null,
  profileImage: null,
  bookmark: [],
  currentlyReading: [],
  finishedReading: [],
  planToRead: [],
  },
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<IUser>>) => {
      
      state.user._id = action.payload._id ?? state.user._id;
      state.user.id = action.payload.id ?? state.user.id;
      state.user.userName = action.payload.userName ?? state.user.userName;
      state.user.role = action.payload.role ?? state.user.role;
      state.user.email = action.payload.email ?? state.user.email;
      state.user.profileImage = action.payload.profileImage ?? state.user.profileImage;
      state.user.myBooks = action.payload.myBooks ?? state.user.myBooks;
      state.user.bookmark = action.payload.bookmark ?? state.user.bookmark;
      state.user.currentlyReading = action.payload.currentlyReading ?? state.user.currentlyReading;
      state.user.finishedReading = action.payload.finishedReading ?? state.user.finishedReading;
      state.user.planToRead = action.payload.planToRead ?? state.user.planToRead;
    },
    setToken: (state, action: PayloadAction<string>) =>{
      state.accessToken = action.payload
    }
  },
  
});
export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
