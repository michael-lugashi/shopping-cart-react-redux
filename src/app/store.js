import { configureStore, createStore } from '@reduxjs/toolkit';
import cartReducer from './cart-reducer';
import productReducer from './product-reducer';

export const store = configureStore({
 reducer: { cart: cartReducer, products: productReducer },
});
console.log(store.getState())
// const store = createStore(reducer)