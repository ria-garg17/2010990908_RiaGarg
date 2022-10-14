import React from 'react'
import styled from 'styled-components';
import './Contact.css'

export const Contact = () => {
    const Wrapper = styled.section`
    .container {
        text-align: left;

        .contact-form{
            max-width: 30rem;
            margin-left: 60%;
            margin-top: -45%;
        }

        .contact-inputs{
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
        }
    }
    `;
  return (
    <Wrapper className='section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.401715917227!2d77.3706607150366!3d28.64768808241183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb14c22d954d%3A0xbb70b05af94bbf72!2sMyWorld%20Pre%20School%20And%20Daycare%20Creche%20Centre!5e0!3m2!1sen!2sin!4v1664775326713!5m2!1sen!2sin" 
        width="60%" 
        height="642" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
            <div className="contact-form">
                <form action='#' method='POST' className='contact-inputs'>
                    <h1>CONTACT US</h1>
                    <div className="inputBox">
                        <input type="text" name="username" placeholder="Enter Username" required/>
                        <span>Enter Username</span>
                    </div>
                    
                    <div className="inputBox">
                        <input type="email" name="email" placeholder="Enter Email" required/>
                        <span>Enter Email</span>
                    </div>

                    <div className="inputBox">
                        <textarea name='message' placeholder="Enter Message" required/>
                        <span>Enter Message</span>
                    </div>
                    
                    <div className="inputBox">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </Wrapper>
  )
}
