import React from 'react';

function ProductItem({ title, price, inventory }) {
 return (
  <div>
      {console.log(inventory)}
   {title} - &#36;{price}
   {inventory ? ` x ${inventory} ` : null}
   <button>Add To Cart</button>
  </div>
 );
}

export default ProductItem;
