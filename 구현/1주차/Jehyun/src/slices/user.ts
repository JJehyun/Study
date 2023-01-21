import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
  accessToken: string;
  idToken: string;
}
//global state
const initialState: InitialState = {
  accessToken: '',
  idToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.accessToken = action.payload.accessToken;
      state.idToken = action.payload.idToken;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
