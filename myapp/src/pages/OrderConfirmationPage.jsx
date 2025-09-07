import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function OrderConfirmationPage() {
  return (
     <div className="css-125">
      <h1 className="css-126">🎉 Order Placed Successfully!</h1>
      <p className="css-127">Thank you for your purchase. Your order has been confirmed and will be shipped soon.</p>
      <div className="css-128">
        <Link to="/" className="css-129">
          <button className="css-130">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OrderConfirmationPage
