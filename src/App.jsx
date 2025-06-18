import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Success from './components/Success';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import { auth } from './components/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  // Check auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLoggedIn(true);
        setUser(currentUser);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  const removeFromCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
    
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Show loading while checking auth state
  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
        } />
        
        <Route path="/" element={
          isLoggedIn ? (
            <>
              <nav className="navbar">
                <Link to="/" className="logo" onClick={() => setCategoryFilter('')}>
                  🌿 GreenNest
                </Link>
                <div className="nav-links">
                  <button onClick={() => setCategoryFilter('fruit')}>Organic Fruits</button>
                  <button onClick={() => setCategoryFilter('veggie')}>Organic Veggies</button>
                  <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
                  <button onClick={handleLogout} className="logout">Logout</button>
                  {user && <span>Welcome, {user.email}</span>}
                </div>
              </nav>
              <Home addToCart={addToCart} categoryFilter={categoryFilter} />
            </>
          ) : <Navigate to="/login" replace />
        } />
        
        <Route path="/cart" element={
          isLoggedIn ? (
            <>
              <nav className="navbar">
                <Link to="/" className="logo" onClick={() => setCategoryFilter('')}>
                  🌿 GreenNest
                </Link>
                <div className="nav-links">
                  <button onClick={() => setCategoryFilter('fruit')}>Organic Fruits</button>
                  <button onClick={() => setCategoryFilter('veggie')}>Organic Veggies</button>
                  <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
                  <button onClick={handleLogout} className="logout">Logout</button>
                  {user && <span>Welcome, {user.email}</span>}
                </div>
              </nav>
              <Cart
                cartItems={cartItems}
                total={getTotal()}
                clearCart={clearCart}
                removeFromCart={removeFromCart}
              />
            </>
          ) : <Navigate to="/login" replace />
        } />
        
        <Route path="/success" element={
          isLoggedIn ? <Success /> : <Navigate to="/login" replace />
        } />
      </Routes>
    </div>
  );
}

export default App;