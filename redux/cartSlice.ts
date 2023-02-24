import { createSlice } from "@reduxjs/toolkit";
import { TMultipleProducts } from "@/types";

const initialState:TMultipleProducts = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => {
        return item.id === action.payload.id
      })
      if (itemExists) {
        itemExists.quantity++
      } else {
        state.push({...action.payload, quantity: 1})
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id)
      if (item) item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id)
      if (!item) return
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload.id)
        state.splice(index, 1)
      } else {
        item.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state.splice(index, 1)     
    },
  },
})

export const cartReducer = cartSlice.reducer

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions