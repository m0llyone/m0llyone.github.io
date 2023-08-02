import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import productSlice from './productSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  products: productSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
