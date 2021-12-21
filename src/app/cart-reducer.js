import cartProducts from "../model/cartProducts";

const cartReducer = (state = cartProducts, action) => {
 switch (action.type) {
  case '1':
   break;

  default:
   return state;
 }
};

export default cartReducer;
