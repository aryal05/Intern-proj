import React from 'react';
import Shipping from '../home/Shipping';

const instagramImages = [
  { id: 1, src: "images/insta-image1.jpg", alt: "instagram" },
  { id: 2, src: "images/insta-image2.jpg", alt: "instagram" },
  { id: 3, src: "images/insta-image3.jpg", alt: "instagram" },
  { id: 4, src: "images/insta-image4.jpg", alt: "instagram" },
  { id: 5, src: "images/insta-image5.jpg", alt: "instagram" },
  { id: 6, src: "images/insta-image6.jpg", alt: "instagram" }
];

const Instagram = () => {
  const handleMouseEnter = (id) => {
    const img = document.getElementById(`instaImage${id}`);
    if (img) {
      img.style.backgroundColor ="green";
      const icon = document.getElementById(`instaIcon${id}`);
      if (icon) {
        icon.style.visibility = "visible";
      }
    }
  };

  const handleMouseLeave = (id) => {
    const img = document.getElementById(`instaImage${id}`);
    if (img) {
      img.style.backgroundColor = "transparent";
      const icon = document.getElementById(`instaIcon${id}`);
      if (icon) {
        icon.style.visibility = "hidden";
      }
    }
  };

  return (<>
    <section id="instagram" className="py-5 bg-light">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="follow-title">Follow our Instagram</h2>
        </div>
        <p className="mb-4">
          Our official Instagram account <a href="#">@ultras</a> or <a href="#">#ultras_clothing</a>
        </p>
        <div className="row d-flex flex-wrap justify-content-between">
          {instagramImages.map(({ id, src, alt }) => (
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={id}>
              <figure className="zoom-effect position-relative insta-img" onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={() => handleMouseLeave(id)}>
                <img id={`instaImage${id}`} src={src} alt={alt} className="img-fluid insta-image" />
                <i id={`instaIcon${id}`} className="bx bxl-instagram icon-Ist icon-instagram position-absolute"
                   style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', visibility: 'hidden' }}></i>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Shipping/>
    </>
  );
};

export default Instagram;
