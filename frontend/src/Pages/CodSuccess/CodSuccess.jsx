import React from 'react';
import { Link } from 'react-router-dom';
import './CodSuccess.css';
import { assets } from '../../assets/assets';

const CODSuccess = () => {
  return (
    <div className="cod-success">
      <div className="cod-success-card">
        <img src={assets.success_icon} alt="Success" className="cod-success-img" />
        <h2>Order Placed Successfully!</h2>
        <p>Your order has been placed using <strong>Cash on Delivery</strong>.</p>
        <p>We’ll notify you once it’s out for delivery.</p>

        <div className="cod-success-buttons">
          <Link to="/myorders" className="btn">View Orders</Link>
          <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default CODSuccess;
