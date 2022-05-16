import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai' ;
import sidebardata  from "./Sidebardata"
import { changelog } from '../Reducers';


function Navbar() {

  

 


 const [sidebar,setsidebar] = useState(false)


  const cartdata =  useSelector(state => state.allproduct.cart)
  //  console.log(cartdata.length)
  
 
  var logstate = useSelector(state => state.allproduct.log)
  // console.log(logstate)
  const dispatch = useDispatch()



  return (

    <div>

 
 <nav className="navbar navbar-expand-lg py-3 px-2" >


<div className="container-fluid">
<Link to="/Pages/Home" className="navbar-brand text-primary " >Ecommerce</Link>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
     <div  className="container col-12">
    
   
  <div className="row ">


     <div className="col-4 ">


        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/Pages/Home" className="nav-link ">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Pages/Products" className="nav-link ">Product</Link>
          </li>
          <li className="nav-item">
          <Link to="/Pages/Home" className="nav-link ">About</Link>
          </li>
         </ul>
      </div>
   
       <div className="col-3  search">
           <input  style={{border:"2px solid black"}} className="form-control mx-2 " type="search" placeholder="Search"/>
           <button style={{backgroundColor:"rgb(233, 243, 252)",border:"none"}} className='btn btn-light py-0  px-0 icon'>
                 <AiOutlineSearch className='text-dark my-2 ' />
           </button>
       </div>

  
         
        <div className='col-5'>
              
          <div className='user '>

                    <div className='mx-4'>
                         <h5 className='text-dark my-2'>Hi User</h5>
                    </div>
           

                <div className='carticon '>

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
          


      
                {logstate ?    (<Link to="/" >
                         <button  style={{borderRadius:"17px"}} onClick={()=>dispatch(changelog(false))}  className='btn mx-3 btn-outline-dark'>
                                 <h6 className='my-1'>
                                    
                                   Logout
                                   </h6>
                           </button>
                           </Link>):


                    ( <Link to="/" >
                         <button  style={{borderRadius:"17px"}}  className='btn mx-3 btn-outline-dark'>
                                 <h6 className='my-1'>
                                    
                                   Login
                                   </h6>
                           </button>
                           </Link>)}



                           

                </div>

          
          </div>
      
        </div>  
    
     </div>

  </div> 



</div>
{sidebar ? (<AiFillCloseCircle onClick={()=>setsidebar(!sidebar)} className='sidebarcross ' />) : (<BsLayoutSidebarInset onClick={()=>setsidebar(!sidebar)}  className='sidebaricon'/>)}


</div>
</nav> 



 <div className=   {sidebar ? ("sidebar-open") : ("sidebar-close")}>

      <div className='side-box my-3'> 

               <Link to="/Pages/Home" className="navbar-brand text-primary mb-3" >Ecommerce</Link>
            
  
        {sidebardata.map((ele,index)=>(

        <div className="side-nav mb-3" key={index}>

            <div className='sideicon mx-2 my-2'>
             {ele.icon}
            </div>


          <Link to={ele.link} onClick={()=>setsidebar(!sidebar)} className='side-title my-2 mb-1'>{ele.title}</Link>
   

        </div>

        ))}

           
          
           

              
      </div>

       
  </div>
 

</div>


  )
}

export default Navbar