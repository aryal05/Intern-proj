import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css';
import "./index.css"
// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import Shop from './shop/Shop.jsx';
import Search from './shop/Search.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
// import Search from './search/Search.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"/blog",
      element:<Blog/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
      path:"/shop",
      element:<Shop/>
  },
  {
    path:"/search",
    element:<Search/>
},
{
  path:"shop/:id",
  element:<SingleProduct/>
},

 
   
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
       
  </React.StrictMode>,
)
