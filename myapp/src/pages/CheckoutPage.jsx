import React , { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CheckoutPage() {
  const { cartItems, clearCart} = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => { 
    e.preventDefault();
    if (!user) {
      alert('Please log in to place an order.');
      navigate('/login');
    } else if (cartItems.length === 0) {
      alert('Your cart is empty. Add some products first!');
      navigate('/');
    }else {
      // ✅ एक नया ऑर्डर ऑब्जेक्ट बनाएँ
      const newOrder = {
        id: Date.now(), // एक यूनीक ID
        items: cartItems,
        total: calculateTotal(),
        date: new Date().toLocaleDateString(),
      };
      alert('Order placed successfully! Thank you for your purchase.');
      addOrder(newOrder);
      clearCart(); // यहाँ आप कार्ट को खाली करने का लॉजिक जोड़ सकते हैं
      // उदा. setCartItems([]);
      navigate('/order-confirmation');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    
   <div className="css-078">
      <h1 className="css-079">Checkout</h1>
      <div className="css-080">
        {/* ऑर्डर समरी */}
        <div className="css-081">
          <h2 className="css-082">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="css-083">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="css-084">
            Total: ₹{calculateTotal()}
          </div>
        </div>

        {/* शिपिंग और पेमेंट फॉर्म */}
        <div className="css-085">
          <h2 className="css-086">Shipping & Payment</h2>
          <form onSubmit={handlePlaceOrder} className="css-087">
            <input type="text" placeholder="Full Name" required className="css-088" />
            <input type="text" placeholder="Address" required className="css-089" />
            <input type="text" placeholder="City" required className="css-090" />
            <input type="text" placeholder="Credit Card Number" required className="css-091" />
            <button type="submit" className="css-092">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
