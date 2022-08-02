import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((sum, { price }) => sum + price, 0);

  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ id, name, price }) => (
          <ProductCard key={id} name={name} price={price} />
        ))}
      </ul>
      <div className="products__total">Total: ${total}</div>
    </div>
  );
};

export default ProductsList;
