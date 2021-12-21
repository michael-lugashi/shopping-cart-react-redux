import React from 'react';
import { addToCart } from '../app/actions';
import { connect } from 'react-redux';

function ProductItem({ title, price, inventory, id, _addToCart }) {
 return (
  <div>
   {title} - &#36;{price}
   {inventory ? ` x ${inventory} ` : null}
   <button
    disabled={inventory ? '' : 'disabled'}
    onClick={() => {
     _addToCart(id);
    }}
   >
    {inventory ? 'Add To Cart' : 'Sold Out'}
   </button>
  </div>
 );
}
const mapDispatchToProps = (dispach) => {
 return {
  _addToCart: (id) => dispach(addToCart(id)),
 };
};
export default connect(null, mapDispatchToProps)(ProductItem);
