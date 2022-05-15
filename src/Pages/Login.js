import React, {  useState } from 'react'
import { Container} from 'reactstrap'




function Login() {

const [showSignup, setShowSignup] = useState(true); 
 const [name,setname] = useState("mor_2314") 
 const [password,setpassword] = useState("83r5^_") 



 const handle = (e)=>{
  e.preventDefault()
  setname("")
  setpassword("")
   // var data = {
   //    username:name,
   //    pass:password
   // }

}

const toggleSignup =() => {
   setShowSignup(!showSignup);
}




     
   
     

return (
    <div> 

         <Container className='col-7 my-3'>


        {showSignup ? (
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
                               <div className='mx-5 my-4'>
                               <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className='form-control input my-4' placeholder='Enter Username' ></input>
                               <input  value={password} onChange={(e)=>setpassword(e.target.value)} type="password"  className='form-control input' placeholder='Enter Password' ></input>
                               </div>
                               
                               <div className='display-btn'>
                             
                               <button type='submit' className='btn login-btn text-light '>
                               {/* <Link to="/Pages/Home" className="text-light" style={{textDecoration:"none"}}> */}
                                   Login
                                   {/* </Link> */}
                                   </button>
                                
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
                             <div className='mx-5 my-4'>
                             <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className='form-control input my-4' placeholder='Enter Username' ></input>
                             <input type="text"  value={password} onChange={(e)=>setpassword(e.target.value)} className='form-control input' placeholder='Enter Password' ></input>
                             </div>
                            
                             <div className='display-btn'>
                             <button className='btn login-btn text-light'>Sign In</button>
                     
                              <span className='my-3'>OR</span>
                             <button className='btn signs-btn'  type='submit' onClick={toggleSignup}>Existing User? Log in</button>
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