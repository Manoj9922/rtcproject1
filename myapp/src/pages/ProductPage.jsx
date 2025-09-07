import React , { useContext,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';
import '../App.css';

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // ✅ क्वांटिटी के लिए स्टेट
  const [mainImage, setMainImage] = useState('');

  const product = products.find((p) => p.id === parseInt(id));  

  // ✅ जब प्रोडक्ट लोड हो या बदले, तो पहली इमेज को मुख्य इमेज बनाएँ
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]); // ✅ product पर निर्भरता जोड़ें

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

 const handleAddToCart = () => {
    // ✅ कार्ट में आइटम जोड़ते समय मात्रा को पास करें
    // हमें CartContext में addToCart फंक्शन को अपडेट करना होगा
    addToCart({ ...product, quantity });
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <div className="css-131">
      <div className="css-132">
        <img
          src={product.image.replace('200', '400')}
          alt={product.name}
          className="css-133"
        />
        <div className="css-134">
          <h1 className="css-135">
            {product.name}
          </h1>
          <p className="css-136">
            ₹{product.price}
          </p>
          <p className="css-137">
            {product.description}
          </p>

            {/* ✅ क्वांटिटी कंट्रोल जोड़ें */}
          <div className="css-138">
            <button
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
              className="css-139"
            >
              -
            </button>
            <span className="css-140">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="css-141"
            >
              +
            </button>
          </div>
          
          <button
          onClick={handleAddToCart}
            className="css-142"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
