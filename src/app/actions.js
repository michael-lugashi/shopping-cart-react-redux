import * as types from './action-types';

// const todoAction= {type: types.ADD_TO_CART}

export const addToCart = (productId) => {
 return {
  type: types.ADD_TO_CART,
  productId,
 };
};
