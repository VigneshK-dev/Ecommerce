import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Carousel from '../Components/Carousel/Carousel'





function Home() {

  

   const cat = [
     {
       id:1,
       title:"Women",
       image:'https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo10_01_1024x.jpg?v=1542301303',
       link:"/pages/Products"
     
   },
   {
    id:2,
    title:"Men",
    image:'https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo10_02_1024x.jpg?v=1542301303',
    link:"/pages/Products"
   },
   {
    id:3,
    title:"Electronics",
    image:'https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp',
    link:"/pages/Products"
   },
   {
    id:4,
    title:"Jewelery",
    image:'https://cdn.shopify.com/s/files/1/0746/3089/t/2/assets/home_block_1_banner_right_image.jpg?v=141168198028992914021610215664',
    link:"/pages/Products"
   }
  
  ]



  return (
    <div>
   
   <Carousel/>
  
  <Container fluid className ='col-12 mt-3 mb-5' >

    <Row className='my-3'>

            {cat.map((item,index)=> (
            <Col  key={index} className="my-1" lg={6} xs={12} >
           <Link to={item.link} >
            <div className='org'>

                <img src={item.image} className='img img-fluid' alt='women'/>

                   <div className='layer'>
                       <h5 className='text-center text-dark fw-bold'>{item.title}</h5>
                    </div>
               </div>
               </Link>
           </Col> ))}

    </Row>
     

      
     
  </Container>

   


    </div>
  )
}

export default Home