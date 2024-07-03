import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {Autoplay} from "swiper/modules"

const products = [
  { id: 1, image: '/images/selling-products1.jpg', title: 'Half Sleeve T-Shirt', category: 'Tshirts', price: 40.00 },
  { id: 2, image: '/images/selling-products2.jpg', title: 'Stylish Grey T-Shirt', category: 'Tshirts', price: 35.00 },
  { id: 3, image: '/images/selling-products3.jpg', title: 'Silk White Shirt', category: 'Tshirts', price: 35.00 },
  { id: 4, image: '/images/selling-products5.jpg', title: 'Grunge Hoodie', category: 'Hoodie', price: 30.00 },
  { id: 5, image: '/images/selling-products4.jpg', title: 'Full sleeve Jeans jacket', category: 'Jackets', price: 40.00 },
  { id: 6, image: '/images/selling-products7.jpg', title: 'Grey Check Coat', category: 'Outer', price: 30.00 },
  { id: 7, image: '/images/selling-products6.jpg', title: 'Long Sleeve T-shirt', category: 'Tshirts', price: 40.00 },
  { id: 8, image: '/images/selling-products13.jpg', title: 'Half Sleeve T-shirt', category: 'Tshirts', price: 35.00 },
  { id: 9, image: '/images/selling-products14.jpg', title: 'Orange white Nike', category: 'Shoes', price: 55.00 },
  { id: 10, image: '/images/selling-products15.jpg', title: 'Running Shoe', category: 'Shoes', price: 65.00 },
  { id: 11, image: '/images/selling-products15.jpg', title: 'Tennis Shoe', category: 'Shoes', price: 80.00 },
  { id: 12, image: '/images/selling-products13.jpg', title: 'Nike Brand Shoe', category: 'Shoes', price: 60.00 },
  { id: 13, image: '/images/selling-products13.jpg', title: 'Pants', category: 'Pants', price: 60.00 },
  { id: 14, image: '/images/selling-products13.jpg', title: 'Nike Brand Shoe', category: 'Shoes', price: 60.00 },
  { id: 15, image: '/images/selling-products13.jpg', title: 'Pants', category: 'Pants', price: 60.00 },

];

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulating fetching product data based on ID
    const selectedProduct = products.find(p => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Optional loading state while data is fetched
  }

  return (
    <>
      <section className="site-banner jarallax padding-large about-section-top">
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-title">Shop Single</h1>
                <div className="breadcrumbs">
                  <span className="item">
                    <Link to="/shop">
                      <a href="/shop">Shop/Single Page</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-single padding-tb aside-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <article>
                  <div className="product-details">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-12">
                        <div className="product-thumb">
                          <Swiper 
                          spaceBetween={30}
                          slidesPerView={1}
                          loop ={true}
                          autoplay ={{
                              delay: 2000,
                              disableOnInteraction:false
                          }}
                          modules={Autoplay}
                          navigation ={
                              {
                              prevEl: ".pro-signle-prev",
                              nextEl: ".pro-signle-next"
                          }
                         }
                          
                          >
                            <SwiperSlide>
                              <div className="single-thumb">
                                <img src={product.image} alt={product.title} />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <h2>{product.title}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        {/* Additional product details can be added here */}
                      </div>
                    </div>
                  </div>

                  {/* Reviews or additional sections */}
                  <div className="review">Review Section</div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
