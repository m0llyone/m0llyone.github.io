import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import weatherSlice from './weatherSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  products: productSlice,
  weather: weatherSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
