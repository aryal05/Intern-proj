import React from 'react'
const articles = [
     {
       id: 1,
       imgSrc: "images/post-img1.jpg",
       day: 22,
       date: "Aug-2021",
       title: "Top 10 Casual Look Ideas To Dress Up Your Kids",
       category: "FASHION"
     },
     {
       id: 2,
       imgSrc:"images/post-img2.jpg",
       day: 25,
       date: "Aug-2021",
       title: "Latest Trends Of Wearing Street Wears Supremely",
       category: "TRENDING"
     },
     {
       id: 3,
       imgSrc: "images/post-img3.jpg",
       day: 28,
       date: "Aug-2021",
       title: "Types Of Comfortable Clothes Ideas For Women",
       category: "INSPIRATION"
     }
   ];
   

const Journal = () => {
  return (
    <>
     <div className="container mx-auto p-4 journel">
      <div className="d-flex justify-content-between align-items-center mb-6 ">
        <h2 className="section-title">Our Journal</h2>
        <a href="#" className="article">Read All Articles →</a>
      </div>
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-4 mb-4" key={article.id}>
            <div className="card shadow rounded-lg overflow-hidden">
              <img src={article.imgSrc} alt={article.title} className="card-img-top h-48 object-cover" />
              <div className="card-body">
                <div className="text-primary display-4 font-weight-bold">{article.day}</div>
                <div className="text-muted">{article.date}</div>
                <h3 className="h5 font-weight-semibold mt-2">{article.title}</h3>
                <p className="text-muted mt-1">{article.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Journal