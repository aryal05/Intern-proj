import React, { useState } from 'react';
import LocationMap from './LocationMap';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    axios.post('http://localhost:3001/contact', { name, email, message })
      .then(result => {
        console.log(result);
        setSuccessMessage('Message Submitted Successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000); // Hide the message after 3 seconds
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="contact-title mb-3">Get In Touch</h2>
            <p className="mb-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mb-3">
              <p className="d-flex align-items-center mb-2">
                <a href="#" className="mr-3"><i className='bx bxs-phone' style={{ width: 20, height: 20 }}></i></a>
                +1650-243-0000
              </p>
              <p className="d-flex align-items-center mb-2">
                <a href="#" className="mr-3"><i className='bx bx-envelope' style={{ width: 20, height: 20 }}></i></a>
                info@yourcompany.com
              </p>
              <p className="d-flex align-items-center">
                <a href="#" className="mr-3"><i className='bx bx-map' style={{ width: 20, height: 20 }}></i></a>
                North Melbourne VIC 3051, Australia
              </p>
            </div>
            <h3 className="mb-2 social">Social Links</h3>
            <div className="d-flex">
              <a href="#" className="mr-3"><i className='bx bxl-facebook' style={{ width: 20, height: 20 }}></i></a>
              <a href="#" className="mr-3"><i className='bx bxl-twitter' style={{ width: 20, height: 20 }}></i></a>
              <a href="#" className="mr-3"><i className='bx bxl-instagram' style={{ width: 20, height: 20 }}></i></a>
              <a href="#" className="mr-3"><i className='bx bxl-youtube' style={{ width: 20, height: 20 }}></i></a>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="contact-title mb-3">Send Us A Message</h2>
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className="form-group mb-3">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="form-group mb-3">
                <textarea 
                  placeholder="Message" 
                  className="form-control" 
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label htmlFor="terms"><span className='label'>I agree to all the</span> terms and conditions</label>
              </div>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <LocationMap />
    </>
  );
};

export default ContactForm;
