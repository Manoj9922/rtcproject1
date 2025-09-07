import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../App.css';

function ProductSection({ title, products, category }) {
  return (
    <div className="css-030">
      <div className="css-031">
        <h2>{title}</h2>
        <Link to={`/category/${category}`} className="css-032">
        <button>More Products</button></Link>
      </div>
      <div className="css-033">
        {products.slice(0, 3).map(item => (         // .slice(0, 3) का मतलब है कि सिर्फ़ पहले 3 आइटम दिखाओ
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
