import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { quickReducer } from './quickSlice';
import { loadState, saveState } from './stateManage';


const reducer = {
  cart: cartReducer,
  quick: quickReducer
};

const preloadedState = loadState()

const store = configureStore({
  reducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;