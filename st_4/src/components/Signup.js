import React from 'react'
import './Login.css';

export const Signup = () => {
  return (
    <div className='loginImage'>
      <img id='background' src='https://images.ctfassets.net/3s5io6mnxfqz/5925yJyZW7Acg3oKrKzMMu/f09be95d1b827ad2c3518ccb6504440f/positions-in-a-company.jpeg'/>

      <div className="outer1">
        <div className="sideImage">
          <img id='sideImage' src='https://images.ctfassets.net/3s5io6mnxfqz/5925yJyZW7Acg3oKrKzMMu/f09be95d1b827ad2c3518ccb6504440f/positions-in-a-company.jpeg'/>
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
