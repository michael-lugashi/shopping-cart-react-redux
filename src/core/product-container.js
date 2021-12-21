import React from 'react';
import productItem from './productItem';
import { addToCart } from '../app/actions';
import { connect } from 'react-redux';

function ProductContainer({ products }) {
 return (
  <div>
   <h2>Products</h2>
   {console.log(products)}
   {/* {products.map((product) => {
    return <productItem product={product} />;
   })} */}
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  products: state,
 };
};
const mapDispatchToProps = (dispach) => {
 return {
  addToCart: () => dispach(addToCart()),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
// export default ProductContainer;
