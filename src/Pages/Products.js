import { Container, Spinner } from 'reactstrap'
import ProductCard from '../Components/ProductCard/ProductCard'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getproduct} from '../Reducer/Reducers'
import { ToastContainer } from 'react-toastify';


function Products() {
 
const dispatch = useDispatch()

  const [isloading,setloading] = useState(false)
  const [data,setdata] = useState([])    
  const [filtered,setfiltered] = useState([])  

 
  const Fetchdata = async ()=>{
    setloading(true)
    var productdata  =  await axios.get("https://fakestoreapi.com/products")
    setloading(false)
     setdata(productdata.data)
     setfiltered(productdata.data)
    dispatch(getproduct(productdata.data))
  }


useEffect(()=>{
   Fetchdata()
   // eslint-disable-next-line react-hooks/exhaustive-deps
},[])




const filter = (cat)=>{
  const fil = data.filter(ele=>(ele.category === cat))
   setfiltered(fil)
}





function filtercomp(){

  const fildata = [
    {
      id:1,
      title:"Women",
      image:'https://cdn.shopify.com/s/files/1/0026/2910/7764/files/02_411c8729-8b45-405b-8807-5323f22695cb_2082x.progressive.png.jpg?v=1552393705',
      filter:"women's clothing"
    
  },
  {
   id:2,
   title:"Men",
   image:'https://cdn.shopify.com/s/files/1/0026/2910/7764/files/03_0e286a8e-d02b-49b4-9b65-9bf8265e7a48_2082x.progressive.png.jpg?v=1552393723',
   filter:"men's clothing"
  },
  {
   id:3,
   title:"Electronics",
   image:'https://images.unsplash.com/photo-1636612680772-59425356da80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
   filter:"electronics"
  },
  {
   id:4,
   title:"Jewelery",
   image:'https://images.unsplash.com/photo-1586104195538-050b9f74f58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
   filter:"jewelery"
  }
 
 ]


  
  
      return (
          <Container fluid className ='col-12 mt-3 mb-5'  >
            
             <div className ='d-flex justify-content-center align-items-center'>
               <button onClick={()=>setfiltered(data)} className ='btn  fw-bold' style={{borderRadius:"5px",backgroundColor:"rgb(233, 243, 252)"}}>All Products</button>
             </div>


     <div className ='display-menu mt-3'>
          
             {fildata.map((items,index) =>(
             <div key={index} className ='orgs'  onClick={()=>filter(items.filter)}  >
                  <img src={items.image} className ='imgs img-fluid' alt='women'/>
                     <div className ='layers'>
                         <h5 className ='text-center fw-bold mx-2'>{items.title}</h5>
                      </div>
                 </div>))
                 
                 }
                       
  
           </div>
  
      
  
    </Container>
      )
  }
  
 

   

const handler = ()=>{

    if(isloading){
       return (
       <div className ="d-flex text-dark justify-content-center ">
            <Spinner style={{width: '3rem', height: '3rem'}}/>
          </div>
           )
    }else{

  
    var productdata =  filtered.map((ele=>(<ProductCard key={ele.id} id={ele.id} title ={ele.title} 
         price = {ele.price} img = {ele.image} rating = {ele.rating.rate} 
          />)))

    return (
    <Container fluid className ='col-10'>
       <div className ='display-product '>
       {productdata}
       </div>
       </Container>
           )
  
    }
  
  }





  return (

    <div>
      <ToastContainer  position='top-left' autoClose="1000" limit={2}/>
{filtercomp()}
 {handler()}
    </div>
  )
}

export default Products