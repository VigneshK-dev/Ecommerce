import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useSelector } from 'react-redux';

function Navbar() {


  const cartdata =  useSelector(state => state.allproduct.cart)
  //  console.log(cartdata.length)

  return (
  
 
 <nav className="navbar navbar-expand-lg py-3 px-2" >
<div className="container-fluid">
<Link to="/Pages/Home" className="navbar-brand text-primary " >Ecommerce</Link>

     <div  className="container-fluid">
    
   
  <div className="row ">


     <div className="col-3">


        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/Pages/Home" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Pages/Products" className="nav-link active">Product</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link active " href="1">About</a>
          </li>
         </ul>
      </div>
   
       <div className="col-4 search">
           <input  style={{border:"2px solid black"}} className="form-control mx-2 " type="search" placeholder="Search"/>
           <button style={{backgroundColor:"rgb(233, 243, 252)",border:"none"}} className='btn btn-light py-0  px-0 icon'>
                 <AiOutlineSearch className='text-dark my-2 ' />
           </button>
       </div>

  
         
        <div className='col-5'>
              
          <div className='user '>

                    <div className='mx-5'>
                         <h5 className='text-dark my-2'>HI VIG</h5>
                    </div>
           

                <div className='carticon'>

                    <Link to='/Pages/Cart' className='text-decoration-none ' >
                           <button  style={{borderRadius:"17px"}} className="btn btn-dark cart position-relative" >   
                                  <RiShoppingBag3Line  className='icon' />
                                             <h6 className=' my-1'>
                                                Cart
                                              </h6>
                                           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                {cartdata.length}
                                                   <span className="visually-hidden">unread messages</span>
                                           </span>
                              </button>
                     </Link>
         
      
    
                         <button style={{borderRadius:"17px"}}  className='btn mx-3 btn-outline-dark'>
                                 <h6 className='my-1'>Logout</h6>
                           </button>

                </div>

          
          </div>
      
        </div>  
    
     </div>

  </div> 

</div>
</nav> 



  )
}

export default Navbar