import React from 'react'
import './Login.css';

export const Signup = () => {
  return (
    <div className='loginImage'>
      <img id='background' src='https://media.istockphoto.com/photos/empty-coffee-shop-picture-id1154756901?k=20&m=1154756901&s=612x612&w=0&h=yN7rVoqn2TAxf61zykcIaNpdxqozdbXjgYcMb4s9Rgc='/>

      <div className="outer1">
        <div className="sideImage">
          <img id='sideImage' src='https://media.istockphoto.com/photos/empty-coffee-shop-picture-id1154756901?k=20&m=1154756901&s=612x612&w=0&h=yN7rVoqn2TAxf61zykcIaNpdxqozdbXjgYcMb4s9Rgc='/>
        </div>
        <div className="login">
        <div className="container1">
            <div className="contact-form1">
                <form action='#' method='POST' className='contact-inputs1' autoComplete="off">
                    <h1>SIGN UP</h1>
                    <div className="inputBox1">
                        <input type="text" name="username" placeholder="Enter Username" required autoComplete="off"/>
        
                    </div>
                    
                    <div className="inputBox1">
                        <input type="email" name="email" placeholder="Enter Email" required autoComplete="off"/>
                       
                    </div>

                    <div className="inputBox1">
                        <input type="password" name="password" placeholder="Enter Password" required/>
                       
                    </div>

                    <div className='remember'>
                      <input type="checkbox" id="rememberMe" name="rememberMe"/>
                      <label for="rememberMe"> &nbsp; Remember me</label>
        
                    </div>
                    
                    <div className="inputBox1">
                        <input type="submit" value="SIGN UP" />
                    </div>

                    
                </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
