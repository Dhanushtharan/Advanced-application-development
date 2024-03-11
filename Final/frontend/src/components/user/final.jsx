import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Final = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Payment Done!</h1>
      <p>You are now ready for your boat experience.</p>
      {/* Add the "Continue to Browse" button */}
      <Link to="/user">Continue to Browse</Link>
    </div>
  );
};

export default Final; 
