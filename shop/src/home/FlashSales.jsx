import React from 'react';

const products = [
     {
       id: 1,
       imgSrc: "images/selling-products9.jpg",
       alt: "Books",
       discount: "10% Off",
       originalPrice: "$50.00",
       discountedPrice: "$40.00",
       title: "Full sleeve cover shirt"
     },
     {
       id: 2,
       imgSrc: "images/selling-products10.jpg",
       alt: "Books",
       discount: "10% Off",
       originalPrice: "$50.00",
       discountedPrice: "$40.00",
       title: "Long Sleeve T-shirt"
     },
     {
       id: 3,
       imgSrc: "images/selling-products11.jpg",
       alt: "Books",
       discount: "10% Off",
       originalPrice: "$55.00",
       discountedPrice: "$45.00",
       title: "Grey Check Coat"
     },
     {
       id: 4,
       imgSrc: "images/selling-products12.jpg",
       alt: "Books",
       discount: "10% Off",
       originalPrice: "$45.00",
       discountedPrice: "$35.00",
       title: "Silk White Shirt"
     },
     // {
     //   id: 5,
     //   imgSrc: "images/selling-products8.jpg",
     //   alt: "Books",
     //   discount: "10% Off",
     //   originalPrice: "$45.00",
     //   discountedPrice: "$35.00",
     //   title: "Blue Jeans pant"
     // }
   ];
   

const FlashSales = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card border rounded-lg overflow-hidden h-100">
              <div className="position-relative">
                <img src={product.imgSrc} alt={product.alt} className="card-img-top"/>
                <div className="position-absolute top-0 start-0 bg-primary-sales text-white text-xs font-bold px-2 py-1 rounded mt-2 ms-2">{product.discount}</div>
              </div>
              <div className="card-body">
                <h3 className="card-title h5">{product.title}</h3>
                <div className="text-muted text-decoration-line-through">{product.originalPrice}</div>
                <div className="text-primary h4">{product.discountedPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSales;
