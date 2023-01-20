import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if(!state.products.find(product => product.id === action.payload.id)){
        state.products.push({...action.payload, amount: 1});
        state.total += action.payload.price;
      }
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if(index !== -1){
        const [product] = state.products.splice(index, 1);
        state.total -= product.price * product.amount;
      }
    },
    increaseProductAmount: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if(product){
        product.amount++;
        state.total += product.price;
      }
    },
    decreaseProductAmount: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if(product && product.amount > 1){
        product.amount--;
        state.total -= product.price;
      }
    },
  }
});

export const { addProduct, removeProduct, increaseProductAmount, decreaseProductAmount } = cartSlice.actions;
export default cartSlice.reducer;