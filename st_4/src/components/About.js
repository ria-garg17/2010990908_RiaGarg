import React from 'react'
import styled from 'styled-components';
import './About.css'

export const About = () => {
    const Wrapper = styled.section``;
  return (
    <Wrapper>
        <div className='outer'>
            <img src='https://www.sgs.com/-/media/sgscorp/images/temporary/urban-buildings-in-guangzhou-china.cdn.en.1.jpg' style={{width: '100%', height: '70vh'}} alt='main-comapny'/>

            <div className="main">
                <h1>OUR COMPANY</h1>
                <div className="inner">
                    <img src="https://corporate.myworld.com/wp-content/uploads/2019/06/mw_photo_2_mobile3x.jpg" alt=''/>
                </div>
                <div className="inner-about">
                    <div className="content">
                        <div className="about">
                            <p>About us</p>
                        </div>
                        <div className="myworld">
                            <p>myWorld <p>Holdings</p></p>
                        </div>
                        <div className="paragraph">
                            <p>From its headquarters in London, myWorld Holdings unites a wide range <br></br> of brands and the group of companies' affiliated businesses under one <br></br> roof. Additionally, the offices at Canary Wharf act as a hub for the wide <br></br> range of projects that are being planned in order to successfully expand <br></br> the myWorld Holdings portfolio over the coming years.</p>
                        </div>

                        <div className="learn">
                            <p>Learn more</p>
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
                            <p> One Company <p>Many Brands</p></p>
                        </div>
                        <div className="paragraph1">
                            <p>The current portfolio of myWorld Holdings includes a range of famous <br></br> brands and successful businesses, such as the world's leading <br></br> benefit program, myWorld, as well as myWorld Media Group and its <br></br> subsidiary companies.</p>
                        </div>

                        <div className="learn1">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className="inner1">
                    <img src="	https://corporate.myworld.com/wp-content/uploads/2019/06/mw_photo_2_desktop3x.jpg" alt=''/>
                </div>
            </div>

            <img src='https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/06/shutterstock_240564724-2.jpg' alt='' style={{width: '92%', height: '70vh', marginLeft: '2%', paddingTop: '4%'}}/>

            <div className="main">
                <h1 style={{paddingTop: '4%'}}>RECENT DEVELOPMENTS</h1>
                <div className="inner">
                    <img src="https://corporate.myworld.com/wp-content/uploads/2019/06/Photo.png" alt=''/>
                </div>
                <div className="inner-about2">
                    <div className="content">
                        <div className="about">
                            <p>Recent Developments</p>
                        </div>
                        <div className="myworld">
                            <p>Shopping with Benefits <p>on myWorld.com</p></p>
                        </div>
                        <div className="paragraph">
                            <p>The myWorld.com cutting-edge shopping platform is granting <br></br> its customers and business partners access to the numerous <br></br>benefits of a state-of-the-art e-commerce platform. Welcome to <br></br> a new world of online shopping.</p>
                        </div>

                        <div className="imglogo">
                            <img src='https://corporate.myworld.com/wp-content/uploads/2019/06/my-world-com-beta@2x.png' alt='' style={{height: '2%'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop: '4%', paddingBottom: '2%'}}>© 2019 myWorld Holdings Imprint | Data protection | Modern Slavery Act Statement</div>
        </div>

    </Wrapper>
  )
}
