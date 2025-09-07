import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import products from '../data/products';
import '../App.css';

function SearchResultsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
     <div className="css-143">
      <h1 className="css-144">
        Search Results for "{query}"
      </h1>
      {filteredProducts.length === 0 ? (
        <p className="css-145">No products found.</p>
      ) : (
        <div
          className="css-146"
        >
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="css-147"
            >
              <div
                className="css-148"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="css-149"
                />
                <h3 className="css-150">
                  {product.name}
                </h3>
                <p className="css-151">
                  ₹{product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResultsPage
