import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart-slice";
import navbarSearchReducer from "../features/navbar-search/navbar-search-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    navbarSearch: navbarSearchReducer
  }
});