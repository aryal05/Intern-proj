import React from 'react'
import LocationMap from './LocationMap'

const ContactForm = () => {
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
            <a href="#" className="mr-3"><i class='bx bxs-phone' style={{ width: 20, height: 20 }}></i></a>
              +1650-243-0000
            </p>
            <p className="d-flex align-items-center mb-2">
            <a href="#" className="mr-3"><i class='bx bx-envelope' style={{ width: 20, height: 20 }}></i></a>
              info@yourcompany.com
            </p>
            <p className="d-flex align-items-center">
            <a href="#" className="mr-3"><i class='bx bx-map' style={{ width: 20, height: 20 }}></i></a>
              North Melbourne VIC 3051, Australia
            </p>
          </div>
          <h3 className="mb-2 social">Social Links</h3>
          <div className="d-flex">
            <a href="#" className="mr-3"><i class='bx bxl-facebook' style={{ width: 20, height: 20 }}></i></a>
            <a href="#" className="mr-3"><i class='bx bxl-twitter' style={{ width: 20, height: 20 }}></i></a>
            <a href="#" className="mr-3"><i class='bx bxl-instagram' style={{ width: 20, height: 20 }}></i></a>
            <a href="#" className="mr-3"><i class='bx bxl-youtube' style={{ width: 20, height: 20 }}></i></a>
          </div>
        </div>
        
        <div className="col-md-6">
          <h2 className="contact-title mb-3">Send Us A Message</h2>
          <form>
            <div className="form-group mb-3">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <input type="email" placeholder="E-mail" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <textarea placeholder="Message" className="form-control" rows="5"></textarea>
            </div>
            <div className="form-group form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label for="terms"><span className='lable'>I agree all the</span> terms and conditions</label>
            </div>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
    <LocationMap/>
    
    </>
  )
}

export default ContactForm