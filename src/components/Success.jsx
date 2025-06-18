import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h2>🎉 Order Successful!</h2>
      <p>Thank you for shopping with GreenNest 🌿</p>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );
};

export default Success;
