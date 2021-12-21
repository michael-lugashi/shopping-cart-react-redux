import React from 'react';

function CartItem({ title, price, inventory }) {

 return inventory ? (
  <div>
   {title} - &#36;{price}
   {` x ${inventory} `}
  </div>
 ) : null;
}

export default CartItem;
