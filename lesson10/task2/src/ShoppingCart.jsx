import React from 'react';

import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

const ShoppingCart = ({ userName, count, purshases }) => (
  <div className="column">
    <CartTitle count={count} userName={userName} />
    <ProductsList cartItems={purshases} />
  </div>
);

export default ShoppingCart;
