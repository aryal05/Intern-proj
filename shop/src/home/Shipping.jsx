import React from 'react';

const Shipping = () => {
  return (
    <section id="shipping-information">
      <hr />
      <div className="container" id='deliver-top'>
        <div className="row d-flex flex-wrap align-items-center justify-content-between delivery">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box shipping truck">
              <i className="bx bxs-truck"></i>
              <h6 className="block-title">
               <strong> Free shipping</strong>
               " Over $200 "
              </h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box shipping return exit">
              <i className="bx bx-exit"></i>
              <h6 className="block-title">
                <strong>Money back </strong>
                " Return within 7 days "
              </h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box shipping purchase tag">
              <i className="bx bx-purchase-tag-alt"></i>
              <h6 className="block-title">
                <strong>Buy 4 get 5th</strong>
                " 50% off "
              </h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box shipping question help">
              <i className="bx bx-question-mark"></i>
              <h6 className="block-title">
               <strong> Any questions? </strong>
               " experts are ready "
              </h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Shipping;
