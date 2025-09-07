import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  // ऑर्डर हिस्ट्री के लिए एक खाली एरे
  const [orders, setOrders] = useState([]);

  // यह फ़ंक्शन एक नया ऑर्डर लेता है और उसे ऑर्डर लिस्ट में जोड़ता है
  const addOrder = (order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  const value = { orders, addOrder };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};