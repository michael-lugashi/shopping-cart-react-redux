import { ADD_TO_CART } from './action-types';
import products from '../model/products';

const productReducer = (state = products, action) => {
 switch (action.type) {
  case ADD_TO_CART:
   return {
    numOfApples: state.numOfCakes - 1,
   };

  default:
   return state;
 }
};

export default productReducer;
