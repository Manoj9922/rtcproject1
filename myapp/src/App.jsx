import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage'; 
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import SearchResultsPage from './pages/SearchResultsPage';
import { OrderProvider } from './context/OrderContext';
import UserDashboard from './pages/UserDashboard';
import CategoriesPage from './pages/CategoriesPage';
import MultiCategoryPage from './pages/MultiCategoryPage';
import './App.css';


function App() {
  return (
    <div>
       <BrowserRouter>
       <AuthProvider>
       <CartProvider>
        <OrderProvider>
      <div className="css-001">
        <Header />
        <main className="css-002">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/multi-category" element={<MultiCategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/signup" element={<SignupPage />} /> 
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </OrderProvider>
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
