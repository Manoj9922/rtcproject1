import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import products from '../data/products';
import '../App.css';


function MultiCategoryPage() {
    const location = useLocation();
  const query = new URLSearchParams(location.search).get('categories');

  // यूआरएल से कैटेगरी के नामों को एरे में बदलें
  const selectedCategories = query ? query.split(',') : [];

  const filteredProducts = products.filter(product =>
    selectedCategories.includes(product.category)
  );
  return (
    <div className="css-116">
      <h1 className="css-117">
        Showing Products from Selected Categories
      </h1>
      {filteredProducts.length === 0 ? (
        <p className="css-118">No products found in selected categories.</p>
      ) : (
        <div
          className="css-119"
        >
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="css-120"
            >
              <div
                className="css-121"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="css-122"
                />
                <h3 className="css-123">
                  {product.name}
                </h3>
                <p className="css-124">
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

export default MultiCategoryPage
