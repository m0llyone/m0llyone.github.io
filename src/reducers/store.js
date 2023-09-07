import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import weatherSlice from './weatherSlice';

const rootReducer = combineReducers({
  products: productSlice,
  weather: weatherSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
