import React from 'react';

const LatestCollection = () => {
  return (
    <div className="container p-4 margin-right">
      <div className="row g-3 margin-right">
        {/* First Collection Item */}
        <div className="col-12 col-md-6">
          <div className="position-relative rounded-3 overflow-hidden first">
            <img
              src='images/collection-item1.jpg'
              alt="Street Wear"
              className="w-100"
              style={{ height: '543px', objectFit: 'cover' }} 
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4">
              <h3 className="h6 text-muted casual">CASUAL COLLECTION</h3>
              <h1 className=" display-4 text-dark">Street <br /> Wear.</h1>
              <p className="mt-2 text-secondary casual">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.
              </p>
              <a href="#" className="mt-4 text-decoration-none latest-collection-shop shoes-shop">
                Shop Collection &rarr;
              </a>
            </div>
          </div>
        </div>
        {/* Second and Third Collection Items */}
        <div className="col-12 col-md-6">
          <div className="row g-4">
            {/* Basic Collection */}
            <div className="col-12">
              <div className="position-relative rounded-3 overflow-hidden second">
                <img
                  src='images/collection-item2.jpg'
                  alt="Basic Shoes"
                  className="w-100"
                  style={{ height: '257px', objectFit: 'cover' }} // Adjust height as needed
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4">
                  <h3 className="h6 text-muted">BASIC COLLECTION</h3>
                  <h1 className="display-4 text-dark">Basic <br />Shoes.</h1>
                  <a href="#" className="mt-4 text-decoration-none latest-collection-shop">
                    Shop Collection &rarr;
                  </a>
                </div>
              </div>
            </div>
            {/* Best Selling Product */}
            <div className="col-12">
              <div className="position-relative rounded-3 overflow-hidden second">
                <img
                  src='images/collection-item3.jpg'
                  alt="Woolen Hat"
                  className="w-100"
                  style={{ height: '260px', objectFit: 'cover' }} // Adjust height as needed
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4">
                  <h3 className="h6 text-muted">BEST SELLING PRODUCT</h3>
                  <h1 className="display-4 text-dark">Woolen <br /> Hat.</h1>
                  <a href="#" className="mt-4 text-decoration-none latest-collection-shop">
                    Shop Collection &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
