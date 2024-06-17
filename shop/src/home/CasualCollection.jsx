import React from 'react';


const CasualCollection = () => {
  return (
     <>
   
    <div className="position-relative bg-white overflow-hidden rounded-lg shadow-lg">
      <img src="images/model.jpg" alt="Model" className="w-100 object-fit-cover" />
      <div className="position-absolute top-0 end-0 bottom-0 d-flex align-items-center justify-content-end p-4 gradient-overlay">
        <div className="max-w-lg text-end casuals">
          <p className="small text-dark-gray D">DENIM COLLECTION</p>
          <h2 className="mt-2 display-4 fw-bold">The Casual<br />Selection.</h2>
          <p className="text-dark-gray lorem">
            Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus.Tempor egestas condimentum et ac rutrum dui, odio.
          </p>
          <a href="#" className="mt-4 d-inline-block fw-medium text-decoration-none SC">
            Shop Collection &rarr;
          </a>
        </div>
      </div>
      
    </div>
  
    </>
  );
}

export default CasualCollection;
