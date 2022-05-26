import React from 'react'
import { Card,CardBody } from 'reactstrap'
import { AiTwotoneStar} from 'react-icons/ai';
import "./ProductCard.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { singleproduct } from '../../Reducer/Reducers';
import { Addtocart } from '../../Reducer/Reducers';
import { toast} from 'react-toastify';
import { useSelector } from 'react-redux';




function ProductCard({title,price,rating,img,id}) {


  const logstate = useSelector(state => state.allproduct.log)
  const dispatch = useDispatch()

  const displaycart =(id) =>{

    if(logstate){
    dispatch(Addtocart(id))
    return toast("Added to Cart" , {type:"info"})
    }else{
      return toast("Please Login " ,{type:"error"})
    }

  }





  return (
  
 
 <div>



 <Card  className=' card-style mx-1' >



 <CardBody >


 <Link className='link-style text-light'  onClick={()=>dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}> 
<img src={img} style={{width: "100%",height:"50%"}} className="card-img-top px-4 py-4 img-fluid" alt="books"/>
</Link>


   <div >
   <Link className='link-style text-light'  onClick={()=>dispatch(singleproduct(id))} to={`/Pages/ProductDetails`}> 
   <h6 className="card-title header text-dark fw-bold">{`${title.substring(0,50)}...`}</h6>
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