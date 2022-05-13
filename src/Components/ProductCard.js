import React from 'react'
import { Card,CardBody } from 'reactstrap'
import { AiTwotoneStar} from 'react-icons/ai';
import "./ProductCard.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { singleproduct } from '../Reducers';
import { Addtocart } from '../Reducers';
import { toast} from 'react-toastify';




function ProductCard({title,price,rating,img,id}) {

  const dispatch = useDispatch()



  const displaycart =(id) =>{
    dispatch(Addtocart(id))
    return toast("Added to Cart" , {type:"info"})

  }



  return (
  
 
 <div>



 <Card  className=' card-style mx-1' >



 <img src={img} style={{width: "100%",height:"50%"}} className="card-img-top px-4 py-4 img-fluid" alt="books"/>



 <CardBody >


   <div className='content'>
   <Link className='link-style text-light'  onClick={()=>dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}> 
   <h6 className="card-title header text-dark fw-bold">{title}</h6>
      <p style={{fontSize:"13px"}} className='text-light rate  px-1'>{rating}
       <span><AiTwotoneStar/></span>
      </p>
    <h5 className='text-dark'>$ {price}</h5>
    </Link>

    <button style={{fontSize:"13px"}} className='btn  btn-outline-dark' onClick={()=>displaycart(id)} > Add To Cart </button>
   <button style={{fontSize:"13px"}} className='btn  btn-dark mx-2' >
   <Link className='link-style text-light'  onClick={()=>dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}>
     Buy now  </Link>
     </button>
   </div>
 
 </CardBody>

  </Card> 



    </div>
  )
}

export default ProductCard