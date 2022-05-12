import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Card, CardBody } from 'reactstrap'
import Cartitems from '../Components/Cartitems'
import { useSelector } from 'react-redux'



function Cart() {


  const [isquantity,setquantity] = useState(0)



 const cartdata =  useSelector(state => state.allproduct.cart)
    
//  console.log(cartdata)

 useEffect(()=>{
   var quant = 0
   cartdata.forEach(ele => {
          quant += ele.price*ele.qty 
   });
      setquantity(quant)
 },[cartdata,isquantity]) 



  
  return (
    <div>

 <Container fluid className='col-11 mt-3'>
  
     <h3 className='my-3'>MY BAG</h3>
     <Row>

           <Col className="col-9">
            <Card style={{backgroundColor:"rgb(233, 243, 252)"}}>
                  
                  <CardBody>

               {cartdata.length ===0  ?    (<div><h3 className='text-center'>Your cart is empty...</h3></div>)  : 
                 
                  (  cartdata.map((ele,index)=>
                    <Cartitems  key={index} id={ele.id} img={ele.image}  qty={ele.qty} price={ele.price} title ={ele.title}
      
                    />
                    ))
                  
                  }
                 
                  </CardBody>
                    

            </Card>
           </Col>
         
           <Col className=" col-3">
            <Card  style={{backgroundColor:"rgb(233, 243, 252)"}}>
                  
                   <CardBody>
           
                  <h5 className='text-center mb-4'>TOTAL</h5>
    
                     <div className='total '>
                     <h5>Sub-total</h5>  
                     <h5>$ {isquantity.toFixed(2)}</h5>
                     </div>
                 
                    
                   </CardBody>
                               
                    
            </Card>
            <div className='d-flex justify-content-center align-items-center'>
             <button className='btn my-2 fw-bold px-5 btn-dark'>CHECKOUT</button>
             </div>
           </Col>
     </Row>

 </Container>
 
 
    </div>
  )
}

export default Cart