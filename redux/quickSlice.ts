import { createSlice } from "@reduxjs/toolkit"
import { TMultipleProducts } from "@/types"

const initialState:TMultipleProducts = [{
  title: '',
  description: '',
  price: '',
  quantity: 0,
  image: '',
  id: '',
}]

const quickSlice = createSlice({
  name: 'quick',
  initialState,
  reducers: {
    openQuick: (state, action) => {
      state.push({...action.payload})
    },
    closeQuick: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state.splice(index, 1)
    },
  },
})

export const quickReducer = quickSlice.reducer

export const {
  openQuick,
  closeQuick,
} = quickSlice.actions