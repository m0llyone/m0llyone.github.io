import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuth: false,
  basket: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export const { setUser, setBasket, logout } = userSlice.actions;
export default userSlice.reducer;
