import React from 'react';
import ProductItem from './productItem';
import { addToCart } from '../app/actions';
import { connect } from 'react-redux';

function ProductContainer({ products, _addToCart }) {
 return (
  <div>
   <h2>Products</h2>
   {console.log(products)}
   {products.map((product, i) => {
    const { id, title, price, inventory } = product;
    return (
     <div key={i}>
      <ProductItem id={id} key={id} title={title} price={price} inventory={inventory} />
     </div>
    );
   })}
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  products: state.products,
 };
};

// const mapDispatchToProps = (dispach) => {
//  return {
//   _addToCart: (id) => dispach(addToCart(id)),
//  };
// };

export default connect(mapStateToProps)(ProductContainer);
// export default ProductContainer;
