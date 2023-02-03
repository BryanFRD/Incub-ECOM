import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
    validateCart: (state) => {
      if(state.products.length === 0){
        toast.error(`Votre liste d'article est vide !`);
        return;
      }
      
      toast.success(`Commande de ${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(state.total)} validée.`);
      
      state.products = [];
      state.total = 0;
    }
  }
});

export const { addProduct, removeProduct, increaseProductAmount, decreaseProductAmount, validateCart } = cartSlice.actions;
export default cartSlice.reducer;