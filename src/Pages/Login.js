import React, {  useState } from 'react'
import { Container} from 'reactstrap'
import { useDispatch} from 'react-redux';
import { changelog } from '../Reducers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

const [islogin, setlogin] = useState(true); 
const [errormsg,seterrormsg] = useState("")
const [name,setname] = useState("")
const [password ,setpassword ] =useState("")
const [mail,setmail] = useState("")
const dispatch = useDispatch()


let navigate = useNavigate()



const handle = (e)=>{
   e.preventDefault()
    if(name.length <=0  || password.length <= 0 ||mail.length <=0 ){
       seterrormsg("Enter all details")
    }else{

  const data ={
            email:mail,
            password:password
   }


  if(islogin){ 
    
     axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFzIi8NGRcOOJSDa0V5X6q1f3bovm0kks',data)
     .then(res=>{
      // console.log(res)

       if(res.status === 200){
           dispatch(changelog(true))
           localStorage.setItem("username",name)
           localStorage.setItem("tokens",res.data.idToken)

          return  navigate("/Pages/Home")
       }else{
         seterrormsg("Error at Login")
       }
     }).catch(err => seterrormsg(err.response.data.error.message))
     
  }else{

     axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFzIi8NGRcOOJSDa0V5X6q1f3bovm0kks',data)
     .then(res=>{
      // console.log(res)
       if(res.status === 200){
           dispatch(changelog(true))
           localStorage.setItem("username",name)
          return  navigate("/Pages/Home")
       }else{
         seterrormsg("Error at Login")
       }
     }).catch(err => seterrormsg(err.response.data.error.message))
     
  }

 
    
    }

   }
  

const toggleSignup =() => {
   setlogin(!islogin);
}


   
     

return (
    <div> 

         <Container className='col-7 loginbox'>


        {islogin ? (
                                <div className='login-card '>
        
                                <div  style={{backgroundColor:"rgb(46,120,237)"}}>
                             
                                    <div className='mx-4 my-5 '>
                                    <h2 className='text-light'>Login</h2>
                                 <h6 className='text-light'  style={{opacity:"0.7"}}>
                                 Get access to your Orders, Wishlist and Recommendations
                                 </h6>
                                
                             
                                 <div>
                             
                                 </div>
                                   
                                    </div>
                                
                                </div>
                             
                              <div className='bg-light'> 
                             
                             <form  onSubmit={handle}>
                               <div className='mx-5 my-4 mt-5'>
                               <input  value={name}  onChange={(e)=>setname(e.target.value)} type="text" className='form-control input my-4' placeholder='Enter Username' ></input>
                               <input value={mail}  onChange={(e)=>setmail(e.target.value)} type="mail" className='form-control input my-4' placeholder='Enter Email'></input>
                               <input  value={password}  onChange={(e)=>setpassword(e.target.value)} type="password"  className='form-control input' placeholder='Enter Password' ></input>
                               </div>
                               
                               <div className='display-btn'>
                             
                               

                               <button type='submit' className='btn login-btn text-light '>
                                   Login
                                  
                                   </button>
                           
                                   <p className='text-primary text-center mx-4 my-2'>{errormsg}</p>

                                <span className='my-3'>OR</span>
                                <p className='text-primary' style={{cursor:'pointer'}}  onClick={toggleSignup} > New Member? Create an account</p>
                               </div>
                             </form>
                                
                              </div>
                             
                             
                             </div>

                            ) : (
                              <div className='login-card '> 
           
        
                              <div  style={{backgroundColor:"rgb(46,120,237)"}}>
                     
                                  <div className='mx-4 my-5 '>
                                  <h3 className='text-light'>Looks like you're new here!</h3>
                               <h6 className='text-light'  style={{opacity:"0.8",lineHeight:"1.5"}}>
                               Sign up with your mobile number/Username to get started
                               </h6>
                             
                     
                               <div>
                     
                               </div>
                                
                                  </div>
                             
                              </div>
                     
                            <div className='bg-light'> 
                       
                         <form onSubmit={handle}>
                             <div className='mx-5 my-5'>
                             <input  value={name}  onChange={(e)=>setname(e.target.value)} type="text" className='form-control input my-4' placeholder='Enter Username' ></input>
                               <input value={mail} onChange={(e)=>setmail(e.target.value)} type="mail" className='form-control input my-4' placeholder='Enter Email'></input>
                               <input   value={password} onChange={(e)=>setpassword(e.target.value)} type="password"  className='form-control input' placeholder='Enter Password' ></input>
                             </div>
                            
                             <div className='display-btn'>

                             <button type='submit' className='btn login-btn text-light'>

                               Sign In
                             </button>
                  
                       
                                             <p className='text-primary text-center mx-4 my-2'>{errormsg}</p>
                              <span className='my-3'>OR</span>
                             <button className='btn signs-btn'   onClick={toggleSignup}>Existing User? Log in</button>
                             </div>
                          </form>
                             
                            </div>
                     
                     
                           </div>
                            )}

         </Container>

    </div>
  )
}

export default Login