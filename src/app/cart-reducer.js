import cartProducts from '../model/cartProducts';
import { ADD_TO_CART } from './action-types';

const cartReducer = (state = cartProducts, action) => {
 const { type, productId } = action;
 switch (type) {
  case ADD_TO_CART:
   const newCart = state.map((product) => {
    const alteredProduct = { ...product };
    if (product.id === productId) {
     alteredProduct.inventory++;
    }
    return alteredProduct;
   });
   return newCart;
  default:
   return state;
 }
};

export default cartReducer;
