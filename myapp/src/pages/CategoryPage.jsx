import React from 'react'         // Kisi ek Category k liye sbhi products show krna 
import { useState } from 'react'; // useState को इंपोर्ट करें
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import '../App.css';

function CategoryPage() {
  const { categoryName } = useParams();
  const [sortOrder, setSortOrder] = useState('default'); // यहाँ सॉर्टिंग के लिए स्टेट बनाया है
  const filteredProducts = products.filter((product) => product.category === categoryName);

  // सॉर्टिंग लॉजिक
  if (sortOrder === 'low-to-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleSortChange = (event) => {setSortOrder(event.target.value);};

  return (
    <div className="css-068">

      <h1 className="css-069">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products
      </h1>

      {/* यहाँ फ़िल्टरिंग ड्रॉपडाउन जोड़ें */}
      <div className="css-070">
        <label htmlFor="sort-by">Sort by: </label>
        <select id="sort-by" value={sortOrder} onChange={handleSortChange} className="css-071">
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="css-072">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="css-073">

            <div className="css-074">
              <img src={product.image} alt={product.name} className="css-075" />

              <h3 className="css-076">
                {product.name}
              </h3>

              <p className="css-077">
                ₹{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
