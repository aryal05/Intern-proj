import React from 'react';


const brandImages = [
  "images/brand1.png",
  "images/brand2.png",
  "images/brand3.png",
  "images/brand4.png",
  "images/brand5.png"
];

export const Brand = () => {
  return (
    <section id="brand-collection" className="py-4 bg-light brand">
      <div className="container brand-names">
        <div className="d-flex flex-wrap justify-content-between">
          {brandImages.map((src, index) => (
            <img src={src} alt="brand" className="brand-image" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
