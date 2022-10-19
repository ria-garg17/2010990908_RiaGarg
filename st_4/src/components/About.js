import React from 'react'
import styled from 'styled-components';
import './About.css'
import logo2 from '../images/logo2.png';

export const About = () => {
    const Wrapper = styled.section``;
  return (
    <Wrapper>
        <div className='outer'>
            <img src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80' style={{width: '100%', height: '70vh'}} alt='main-comapny'/>

            <div className="main">
                <h1>OUR CAFE</h1>
                <div className="inner">
                    <img src="https://m.media-amazon.com/images/I/61A0WcSd8AL._SX679_.jpg" alt=''/>
                </div>
                <div className="inner-about">
                    <div className="content2">
                        <div className="about">
                            <p>About us</p>
                        </div>
                        <div className="myworld">
                            <h2 >ESPRESSO <h2>CAFE</h2></h2>
                        </div>
                        <div className="paragraph" style={{paddingTop: '-1%'}}>
                            <p>ESPRESSO Café is an Australian style cafe that serves simple, natural food <br></br> including Vegan and Gluten Free options - accompanied by authentic <br></br> espresso coffee. Most coffee shops in the United States don't do much <br></br> with food and most restaurants don't worry about coffee. The Australian <br></br> café is a hybrid combining a strong coffee culture and a robust food culture <br></br> under one roof in a welcoming, cozy and comfortable neighborhood café.</p>
                        </div>

                        <div className="learn">
                            <p style={{paddingTop: '3%'}}>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main1">
                <h1>WHAT WE DO</h1>
                <div className="inner-about1">
                    <div className="content1">
                        <div className="about1">
                            <p>What we do</p>
                        </div>
                        <div className="myworld1">
                            <p> One Cafe <p>Many Brands</p></p>
                        </div>
                        <div className="paragraph1">
                            <p>We host monthly wine dinners, chefs' tasting dinners and more. <br></br>We also enjoy hosting your special occasions - whether baby <br></br> showers, anniversaries, birthdays, or office parties. See our Fine<br></br> Dining & Functions page for more details.</p>
                        </div>

                        <div className="learn1">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className="inner1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcg1CL39wk9Dmocn8an8BEU3BUMN32qK6zl_uiwOGzecAJb6KAfhM4_B493xpiX_2fxI&usqp=CAU" alt=''/>
                </div>
            </div>

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl88UO5NEEry-4GLa1FxC2QiFi9hf3NGZHuXxHsHzoEimEzNpzZWHftZZ1X_ukg21kE2Q&usqp=CAU' alt='' style={{width: '92%', height: '70vh', marginLeft: '2%', paddingTop: '4%'}}/>

            <div className="main">
                <h1 style={{paddingTop: '4%'}}>RECENT DEVELOPMENTS</h1>
                <div className="inner">
                    <img src="https://content.jdmagicbox.com/comp/mathura/i5/9999px565.x565.220402133304.z1i5/catalogue/-sd2bnhyd1j.jpg" alt=''/>
                </div>
                <div className="inner-about2">
                    <div className="content2">
                        <div className="about">
                            <p>Recent Developments</p>
                        </div>
                        <div className="myworld">
                            <h2>Taste with Benefits <h2>on espresso.com</h2></h2>
                        </div>
                        <div className="paragraph">
                            <p>The espresso.com cutting-edge shopping platform is granting <br></br> its customers and business partners access to the numerous <br></br>benefits of a state-of-the-art e-commerce platform. Welcome to <br></br> a new world of online shopping.</p>
                        </div>

                        <div className="imglogo"  style={{marginLeft: '2%'}}>
                            <img src={logo2} alt='' style={{height: '200px', marginTop: '-6%'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop: '4%', paddingBottom: '2%'}}>@2022 Espresso Cafe | All rights reserved</div>
        </div>

    </Wrapper>
  )
}
