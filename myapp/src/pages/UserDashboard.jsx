import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { OrderContext } from '../context/OrderContext';
import { Navigate } from 'react-router-dom';
import '../App.css';

function UserDashboard() {
  const { user } = useContext(AuthContext);
  const { orders } = useContext(OrderContext);

   // अगर यूजर लॉग इन नहीं है, तो उसे लॉगिन पेज पर भेज दें
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="css-160">
      <h1 className="css-161">
        Welcome, {user.username}!
      </h1>
      <h2 className="css-162">Your Orders</h2>
      {orders.length === 0 ? (
        <p style={{textAlign:"center"}}>You have no past orders.</p>
      ) : (
        <div className="css-163">
          {orders.map((order) => (
            <div key={order.id} className="css-164">
              <p className="css-165">Order ID: #{order.id}</p>
              <p className="css-166">Date: {order.date}</p>
              <ul className="css-167">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} (₹{item.price * item.quantity})
                  </li>
                ))}
              </ul>
              <p className="css-168">
                Total: ₹{order.total}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserDashboard
