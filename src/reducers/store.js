import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import weatherSlice from './weatherSlice';
import propsSlice from './propsSlice';

const rootReducer = combineReducers({
  products: productSlice,
  weather: weatherSlice,
  props: propsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
