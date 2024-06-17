import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div className="copyright small">
          <p>
        Freebies by <a href="#">Templates Jungle</a> Distributed by <a href="#">ThemeWagon</a>
        </p>
      </div>
      <div className="d-flex align-items-center">
        <span className="text-muted small me-2 payment">Payment options:</span>
        <img src="images/visa-icon.jpg" alt="Visa" className="h-25" />
        <img src="images/mastercard.png" alt="MasterCard" className="h-25 mx-2" />
        <img src="images/american-express.jpg" alt="American Express" className="h-25" />
      </div>
    </div>
  );
};

export default Footer;
