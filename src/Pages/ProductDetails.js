import { Container,Col,Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneStar} from 'react-icons/ai';
import { Addtocart } from '../Reducers';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function ProductDetails() {


  const data = useSelector(state=>state.allproduct.productdetails)
//  console.log(data)
const dispatch = useDispatch()




const displaycart =(id) =>{
  dispatch(Addtocart(id))
  return toast("Added to Cart" , {type:"info"})

}



  return (
    <div>
        
         <Container fluid className='col-12'>
   <ToastContainer position='top-left'  autoClose="1000"/>

    {data.map((ele,index)=> (
      <Row key={index}>

            <Col className='col-5 my-5' > 
              
               <div>
                 <img src={ele.image} className='img-fluid p-5'  alt='product' />
               </div>
            </Col>
       
        
            <Col className='col-7 my-5 ' > 
              <div className='my-4 mx-5'>
                 <h2  className='mx-5 cat'>{ele.category}</h2>
                 <h2 className='mx-5 title'>{ele.title}</h2>

                 <div className='mx-5'>
                    
                 <p style={{fontSize:"15px"}} className='text-light mx-1'>
                  <span className='rate px-1'>{ele.rating.rate}<AiTwotoneStar /></span>
                  <span className='text-dark mx-2' >{ele.rating.count} reviews</span>
                  </p> 

                   <h1 className='price my-4 text-dark' >$ {ele.price}</h1>
                   <h5 className='desp'> {ele.description} </h5>
             
                 <div className='my-5'>
                   
                   <button className='btn cartbtn btn-outline-dark' onClick={()=>displaycart(ele.id)}>Add to Cart</button>
                   <button className='btn cartbtn btn-dark mx-2 '>
                   <Link to='/Pages/Cart' className='text-decoration-none text-light' >
                     Go to Cart   
                     </Link>
                     </button> 
                 </div>
                 
                 </div>

                </div>


            </Col>
      </Row>
 ))}

         </Container>

    </div>
  )
}

export default ProductDetails