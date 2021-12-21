import React from 'react';

function CartItem({ title, price, inventory }) {
 return (
  <div>
      {console.log(inventory)}
   {title} - &#36;{price}
   {inventory ? ` x ${inventory} ` : null}
  </div>
 );
}

export default CartItem;