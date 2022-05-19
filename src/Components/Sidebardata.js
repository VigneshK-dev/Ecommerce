import {CgProductHunt} from 'react-icons/cg'
import {FcAbout} from 'react-icons/fc'
import {FiShoppingCart} from 'react-icons/fi'
import { AiOutlineHome} from 'react-icons/ai' ;
import {BiLogOut} from 'react-icons/bi'



var sidebardata = [
    {
    title:"Home",
    icon:<AiOutlineHome/>,
    link:"/Pages/Home"
  },
  
  {
    title:"Product",
    icon:<CgProductHunt/>,
    link:"/Pages/Products"
  },
  {
    title:"About",
    icon:<FcAbout/>,
    link:"/404"
  },
  
  {
    title:"Cart",
    icon:<FiShoppingCart/>,
    link:"/Pages/Cart" 
  },
  {
    title:"Logout",
    icon:<BiLogOut/>,
    link:"/"
  },
  ]
  
export default sidebardata  