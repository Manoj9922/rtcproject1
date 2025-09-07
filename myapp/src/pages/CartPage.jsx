import React , { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'; 
import '../App.css';

function CartPage() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="css-046">
      <h1 className="css-047">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="css-048">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="css-049">
              <img src={item.image} alt={item.name} className="css-050" />
              <div className="css-051">
                <h3 className="css-052">{item.name}</h3>
                <p className="css-053">₹{item.price} x {item.quantity}</p>
                <p className="css-054">Total: ₹{item.price * item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="css-055"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="css-056">
            Grand Total: ₹{calculateTotal()}
          </div>

           {/* यहाँ Checkout बटन जोड़ें */}
          <div className="css-057">
            <Link to="/checkout" className="css-058">
              <button
                className="css-059"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default CartPage
