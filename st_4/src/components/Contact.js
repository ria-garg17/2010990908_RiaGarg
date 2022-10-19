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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54914.87384051405!2d76.66125175820312!3d30.657070299999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febe3291b0d27%3A0xd170d5727384fb5e!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1665914390592!5m2!1sen!2sin" 
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
