import React from 'react';
import CartItem from './cartItem';
import { connect } from 'react-redux';

function CartContainer({ cart }) {
 const total = () => {
  let total = 0;
  for (const { inventory, price } of cart) {
   total += inventory * price;
  }
  return total.toFixed(2);
 };
 return (
  <div>
   <h2>Cart</h2>
   {cart.map((product) => {
    const { id, title, price, inventory } = product;
    return (
     <CartItem key={id} title={title} price={price} inventory={inventory} />
    );
   })}
   <br/>
   {`Total: $${total()}`}
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  cart: state.cart,
 };
};
const mapDispatchToProps = (dispach) => {
 return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
