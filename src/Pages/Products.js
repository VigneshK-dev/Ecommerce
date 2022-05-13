import { Container, Spinner } from 'reactstrap'
import ProductCard from '../Components/ProductCard'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getproduct} from '../Reducers'
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
},[])

const filter = (cat)=>{
  const fil = data.filter(ele=>(ele.category === cat))
   setfiltered(fil)
}




function filtercomp(){

  
  
      return (
          <Container fluid className ='col-12 mt-3 mb-5'  >
            
             <div className ='d-flex justify-content-center align-items-center'>
               <button onClick={()=>setfiltered(data)} className ='btn  fw-bold' style={{borderRadius:"5px",backgroundColor:"rgb(233, 243, 252)"}}>All Products</button>
             </div>


     <div className ='display-menu mt-3'>
          
              <div className ='orgs'  onClick={()=>filter("women's clothing")}  >
                  <img src='https://cdn.shopify.com/s/files/1/0026/2910/7764/files/02_411c8729-8b45-405b-8807-5323f22695cb_2082x.progressive.png.jpg?v=1552393705' className ='imgs img-fluid' alt='women'/>
                     <div className ='layers'>
                         <h5 className ='text-center fw-bold'>Women</h5>
                      </div>
                 </div>
             
  
  
           
             <div className ='orgs ' onClick={()=>filter("men's clothing")}  >
             <img src='https://cdn.shopify.com/s/files/1/0026/2910/7764/files/03_0e286a8e-d02b-49b4-9b65-9bf8265e7a48_2082x.progressive.png.jpg?v=1552393723' className ='imgs img-fluid' alt='men'/>
                     <div className ='layers'>
                         <h5 className ='text-center fw-bold'>Men</h5>
                      </div>
                 </div>
  
   
  
      
               

              <div className ='orgs'onClick={()=>filter("electronics")} >
                  <img src='https://images.unsplash.com/photo-1636612680772-59425356da80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' className ='imgs img-fluid' alt='ele'/>
                     <div className ='layers'>
                         <h5 className ='text-center fw-bold'>Electronics</h5>
                      </div>
                 </div>
         
  
  
         
             <div className ='orgs'  onClick={()=>filter("jewelery")} >
             <img src='https://images.unsplash.com/photo-1586104195538-050b9f74f58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className ='imgs img-fluid' alt='jew'/>
                     <div className ='layers'>
                         <h5 className ='text-center fw-bold'>jewelery</h5>
                      </div>
                 </div>
  
         
  
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