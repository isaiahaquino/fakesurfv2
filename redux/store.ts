import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { quickReducer } from './quickSlice';

const reducer = {
  cart: cartReducer,
  quick: quickReducer
};

const store = configureStore({
  reducer,
});

export default store;