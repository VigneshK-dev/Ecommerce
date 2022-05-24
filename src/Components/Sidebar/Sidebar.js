import {CgProductHunt} from 'react-icons/cg'
import {FcAbout} from 'react-icons/fc'
import {FiShoppingCart} from 'react-icons/fi'
import { AiOutlineHome} from 'react-icons/ai' ;
import {BiLogOut,BiLogIn} from 'react-icons/bi'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showlogin } from '../../Reducer/Reducers';
import { useNavigate } from 'react-router-dom';
import { changelog } from '../../Reducer/Reducers';




function Sidebar({status,transferdata}){
  

  const logstate = useSelector(state => state.allproduct.log)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const loggingout = ()=>{
      localStorage.removeItem("username")
       dispatch(changelog(false))
      return  navigate("/")
  } 


var data = [
    {
    id:1,
    title:"Home",
    icon:<AiOutlineHome/>,
    link:"/"
  },
  
  {
    id:2,
    title:"Product",
    icon:<CgProductHunt/>,
    link:"/Pages/Products"
  },
  {
    id:3,
    title:"About",
    icon:<FcAbout/>,
    link:"/404"
  },
  
  {
    id:4,
    title:"Cart",
    icon:<FiShoppingCart/>,
    link:"/Pages/Cart" 
  },
   
  logstate? {id:5,title :<span onClick={loggingout}>Logout</span>,icon:<BiLogOut  />,link:"/"} 

  :{ id:5,title:<span onClick={()=>dispatch(showlogin(true))}>Login</span>,icon:<BiLogIn />,link:"/"}
  
  ]




  return(

      <div>



<div className=   {status ? ("sidebar-open") : ("sidebar-close")}>

<div className='side-box my-3'> 

         <Link to="/" className="navbar-brand text-primary mb-3" >Ecommerce</Link>

    
           {/* <input  style={{border:"2px solid rgb(51, 122, 229)"}} className="form-control mb-2" type="search" placeholder="Search"/>
           <button className='btn btn-primary mb-4'>Search</button>  */}

    
  {data.map((ele,index)=>(

  <div className="side-nav mb-3" key={index}>

      <div className='sideicon mx-2 my-2'>
       {ele.icon}
      </div>


    <Link to={ele.link} onClick={transferdata} className='side-title my-2 mb-1'>{ele.title}</Link>


  </div>

  ))}

     
    
     

        
</div>

 
</div>


      </div>
  )
  

}


export default Sidebar