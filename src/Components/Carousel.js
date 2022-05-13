import React from 'react'
import "./Carousel.css"
import { Link } from 'react-router-dom'

function Carousel() {



  return (
    <div>
        

  <div className="carousel-inner" >
    <div className="carousel-item active ">
      <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png?v=1537467468"  className="w-100 banner" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='car-title'>FINAL CLEARANCE</h1>
        <p className='car-des'>Take 20% Off 'Save Must-Haves'</p>
         <button style={{fontSize:"30px"}} className='btn btn-dark'>
         <Link to="/Pages/Products" className="nav-link active text-light fw-bold " >
         Shop Now
         </Link>
           </button>
      </div>
    </div>

  </div>





    </div>
  )
}

export default Carousel