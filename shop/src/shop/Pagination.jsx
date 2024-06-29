import React from 'react'

const Pagination = ({productsPerPage,totalProducts,paginate,activePage}) => {
     const pageNumber =[];
     for(let i =1; i<= Math.ceil(totalProducts / productsPerPage); i++){
          pageNumber.push(i)
     }
  return (
    <>
    <ul>
     {
          pageNumber.map((number) =>(
               <li key={number}>
                    <a href="#">{number}</a>
               </li>
          )
     )}
    </ul>

    </>
  )
}

export default Pagination