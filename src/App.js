import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';





const Home = React.lazy(()=> import('./Pages/Home'))
const Products = React.lazy(()=>import('./Pages/Products'))
const ProductDetails = React.lazy(()=>import('./Pages/ProductDetails')) 
const Cart = React.lazy(()=>import('./Pages/Cart')) 
const Login = React.lazy(()=> import("./Pages/Login"))

function App() {
  return (
    <div >
     
     <Navbar/> 
 
    <Suspense fallback={ <div className ="d-flex text-dark justify-content-center ">
            <Spinner style={{width: '3rem', height: '3rem'}}/>
             </div>}>
     <Routes>
     <Route path='/' element={<Login/>} />
     <Route path='/Pages/Home' element={<Home/>} />
     <Route path='/Pages/Products' element={<Products/>} />
     <Route path='/Pages/ProductDetails' element={<ProductDetails/>} />
     <Route path='/Pages/Cart' element={<Cart/>} />
     </Routes> 
     
     </Suspense>
    <Footer/>
    

    </div>
  );
}

export default App;
