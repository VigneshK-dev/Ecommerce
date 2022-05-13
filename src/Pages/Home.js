import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Carousel from '../Components/Carousel'





function Home() {

 


  return (
    <div>
   
   <Carousel/>
  
  <Container fluid className ='col-12 mt-3 mb-5' >

    <Row className='my-3'>


           <Col  className="my-1" lg={6} xs={12} >
           <Link to="/Pages/Products" >
            <div className='org'>

                <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo10_01_1024x.jpg?v=1542301303' className='img img-fluid' alt='women'/>

                   <div className='layer'>
                       <h5 className='text-center text-dark fw-bold'>Women</h5>
                    </div>
               </div>
               </Link>
           </Col>


           <Col lg={6} xs={12} >
           <Link to="/Pages/Products"  >
           <div className='org'>
         
           <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo10_02_1024x.jpg?v=1542301303' className='img  img-fluid' alt='men'/>

                   <div className='layer'>
                       <h5 className='text-center text-dark  fw-bold'>Men</h5>
                    </div>
               </div>
               </Link>
           </Col>

       
    </Row>
     

      <Row>
             
      <Col lg={6} xs={12} >
      <Link to="/Pages/Products" >
            <div className='org'>

                <img src='https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp' className='img img-fluid' alt='ele'/>
            
                   <div className='layer'>
                       <h5 className='text-center text-dark  fw-bold'>Electronics</h5>
                    </div>
               </div>
               </Link>
           </Col>


           <Col lg={6} xs={12} >
           <Link to="/Pages/Products" >
           <div className='org'  >
         
           <img src='https://cdn.shopify.com/s/files/1/0746/3089/t/2/assets/home_block_1_banner_right_image.jpg?v=141168198028992914021610215664' className='img img-fluid' alt='jew'/>
         
                   <div className='layer'>
                       <h5 className='text-center text-dark fw-bold'>jewelery</h5>
                    </div>
               </div>
               </Link>
           </Col>



      </Row>

  </Container>

   


    </div>
  )
}

export default Home