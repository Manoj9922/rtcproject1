import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import products from '../data/products';
import '../App.css';

const getUniqueCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.map(category => {
    // यहाँ हर कैटेगरी के लिए एक प्रतिनिधि इमेज (representative image) चुनें
    // हम उस कैटेगरी के पहले प्रोडक्ट की इमेज का उपयोग करेंगे।
    const product = products.find(p => p.category === category);
    return {
      name: category,
      image: product ? product.image : 'https://via.placeholder.com/200', // अगर इमेज नहीं मिली, तो एक डमी इमेज
    };
  });
};

function CategoriesPage() {
    const categories = getUniqueCategories();
     // मल्टी-सेलेक्ट के लिए स्टेट
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (categoryName) => {
    setSelectedCategories(prevSelected => {
      // अगर कैटेगरी पहले से सेलेक्ट है, तो उसे हटा दें
      if (prevSelected.includes(categoryName)) {
        return prevSelected.filter(name => name !== categoryName);
      } 
      // वरना, उसे सेलेक्ट किए गए एरे में जोड़ दें
      else {
        return [...prevSelected, categoryName];
      }
    });
  };

  const handleViewSelected = () => {
    // सेलेक्ट की गई कैटेगरी को URL में पास करें
    if (selectedCategories.length > 0) {
      // URL में कैटेगरी को एक स्ट्रिंग के रूप में पास करें
      const queryString = selectedCategories.join(',');
      navigate(`/multi-category?categories=${queryString}`);
    } else {
      alert('Please select at least one category.');
    }
  };

  return (
     <div className="css-060">
      <h1 className="css-061">Shop by Category</h1>
      <div className="css-062">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="css-063"
            onClick={() => handleSelect(category.name)}
          >
            <img src={category.image} alt={category.name} className="css-064" />
            <h2 className="css-065">
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </h2>
          </div>
        ))}
      </div>
      
      {/* "View Selected" बटन */}
      <div className="css-066">
        <button
          onClick={handleViewSelected}
          className={`css-067 ${selectedCategories.length > 0 ? "active-btn" : ""}`}
        >
          View Selected ({selectedCategories.length})
        </button>
      </div>
    </div>
  )
}

export default CategoriesPage
