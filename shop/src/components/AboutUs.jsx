import React from 'react'

const AboutUs = () => {
  return (
  <>
   <div className="bg-white py-8">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="widget-title">Ultras</h3>
            <ul className="list-unstyled mt-4 info">
              <li><a href="#" className="text-decoration-none">About us</a></li>
              <li><a href="#" className="text-decoration-none">Conditions</a></li>
              <li><a href="#" className="text-decoration-none">Our Journals</a></li>
              <li><a href="#" className="text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-decoration-none">Affiliate Programme</a></li>
              <li><a href="#" className="text-decoration-none">Ultras Press</a></li>
            </ul>
          </div>
          <div className="col-md-3 customer-sec">
            <h3 className="widget-title">Customer Service</h3>
            <ul className="list-unstyled mt-4 info">
              <li><a href="#" className="text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none">Returns & Refunds</a></li>
              <li><a href="#" className="text-decoration-none">Cookie Guidelines</a></li>
              <li><a href="#" className="text-decoration-none">Delivery Information</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="widget-title">Contact Us</h3>
            <p className="mt-4 text-zinc-600">Do you have any questions or suggestions? <a href="mailto:ourservices@ultras.com" className='Our-Ser'>ourservices@ultras.com</a></p>
            <p className="mt-2 text-zinc-600">Do you need assistance? Give us a call.</p>
            <p className="mt-2 text-lg font-bold"><strong>+57 444 11 00 35</strong></p>
          </div>
          <div className="col-md-3">
            <h3 className="widget-title">Forever 2018</h3>
            <p className="mt-4 text-zinc-600">Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
            <div className="mt-4 social-ico">
              <a href="#"><i class='bx bxl-facebook'></i></a>
              <a href="#"><i class='bx bxl-twitter' ></i></a>
              <a href="#"><i class='bx bxl-youtube' ></i></a>
              <a href="#"><i class='bx bxl-bootstrap'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </>
  )
}

export default AboutUs