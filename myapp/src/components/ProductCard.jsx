import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="css-027">
    <div className="css-028">
      <img src={item.image} alt={item.name} className="css-029" />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      
    </div>
    </Link>
  )
}

export default ProductCard
