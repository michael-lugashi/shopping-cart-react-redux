import { ADD_TO_CART } from './action-types';
import products from '../model/products';

const productReducer = (state = products, action) => {
 console.log(action);

 switch (action.type) {
  case ADD_TO_CART:
   return {
    state
   };

  default:
   return state;
 }
};

export default productReducer;
