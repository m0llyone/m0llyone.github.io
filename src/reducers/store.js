import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import productSlice from './productSlice';
import weatherSlice from './weatherSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  products: productSlice,
  weather: weatherSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
