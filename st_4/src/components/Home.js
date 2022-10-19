import React from 'react'
// import company from '../images/company.jpeg';
import './Home.css'
// import back from './images/back';


export const Home = () => {
  return (
    <div className="container-1">
      <img src='https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0JTIwY2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3),transparent)'}}></img>
      <div class="text-box">
            <p> WELCOME TO</p>
            <h1>ESPRESSO CAFE</h1>
      </div>

      <div className="about-cafe">
          <div className="content" style={{maxWidth: '700px'}}>
            <h1><span>ABOUT THE CAFE</span></h1>
            {/* <br><br><br> */}
            <p>
                The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* <br> */}
            <p>
                In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.
            </p>

            <div className="note">
                <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                <p>Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3hEDXVcx_XdYKtxUCpLUv_C_TI04yPd5QsDDqGMDXoews8l7oF2Ja44qoQFORWp4bK4&usqp=CAU" style={{width:'100%', height:'90%', marginLeft:'1%'}} className="margin-top"></img>
            <p className="hours"><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
            <p className="hours"><strong>Address:</strong> 15 Adr street, 5015, NY</p>
        </div>
      </div>

      <div className="menu">
        <h1>OUR MENU</h1>
        <div className="card1">
            <div class="card-image1" >
            </div>
            <div className="card-text">
                <h2>AFFOGATO</h2>
                <p>Espresso poured on a vanilla ice cream. Served in a cappuccino cup.</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>

        <div className="card1">
            <div className="card-image2">
            </div>
            <div className="card-text">
                <h2>AMERICANO</h2>
                <p>Espresso with added hot water (100–150 ml). Often served in a cappuccino cup.</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>
        
        <div className="card1">
            <div className="card-image3"></div>
            <div className="card-text">
                <h2>RISTRETTO</h2>
                <p>A very short shot of espresso (about 20 ml). Served in an espresso cup..</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>

        <div className="card1">
            <div className="card-image4"></div>
            <div className="card-text">
                <h2>CAPPUCCINO</h2>
                <p>A coffee drink consisting of espresso and a milk foam mixture.</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>

        <div className="card1">
            <div className="card-image5"></div>
            <div className="card-text">
                <h2>ESPRESSO</h2>
                <p>A short, strong drink (about 30 ml) served in an espresso cup.</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>

        <div className="card1">
            <div className="card-image6"></div>
            <div className="card-text">
                <h2>FREAKSHAKE</h2>
                <p>A coffee drink with a double espresso and lightly frosted milk.</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>

        <div className="card1">
            <div className="card-image7"></div>
            <div className="card-text">
                <h2>FRAPPÉ</h2>
                <p>Rich iced coffee made of espresso, milk and ice. Flavoured syrup can be added (about 300 ml).</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div>
        </div>

        <div className="card1">
            <div className="card-image8"></div>
            <div className="card-text">
                <h2>LUNGO</h2>
                <p>An espresso pulled long (50-60 ml). Served in an espresso/cappuccino cup.</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">TASTED</div>
                </div>
    
                <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">LIKES</div>
                </div>
    
                <div className="stat">
                    <div className="value">62</div>
                    <div className="type">COMMENTS</div>
                </div>
            </div> 
            </div>
        </div>


        <div class="quote">
            <img src="https://www.w3schools.com/w3images/coffeehouse2.jpg" alt="a cup of coffee"></img>
        </div>

        <div class="main">
        <h1>OUR CHEFS</h1>

        <div className="cardss">

            <div className="image">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80" style={{width: '300px', height: '250px', marginLeft: '1px', marginTop: '-2%'}}></img>
            </div>
            <div className="title">
                <h1>Gordon Ramsay</h1>
            </div>
            <div className="des">
                <p>Known for the harsh words he shares with the people on his TV show Hell’s Kitchen.</p>
                <button>Read More...</button>
            </div>
            
        </div>


        <div className="cardss">

            <div className="image">
                <img src="https://images.unsplash.com/photo-1625631980634-397b9e9a73f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={{width: '300px', height: '300px', marginLeft: '1px', marginTop: '-2%'}}></img>
            </div>
            <div className="title">
                <h1>Rachael Ray</h1>
            </div>
            <div className="des">
                <p>Known for her catchphrase “Yum-O!” and is one of the most famous chefs. </p>
                <button>Read More...</button>
            </div>
        </div>


        <div className="cardss">

            <div className="image">
                <img src="https://images.unsplash.com/photo-1641536618422-2cf0bbd10014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" style={{width: '300px', height: '300px', marginLeft: '1px', marginTop: '-2%'}}></img>
            </div>
            <div className="title">
                <h1>Guy Fieri</h1>
            </div>
            <div className="des">
                <p>Known for his iconic highlighted hair and Fieri is the most mainstream famous chef.</p>
                <button>Read More...</button>
            </div>
        </div>


        <div className="cardss">

            <div className="image">
                <img src="https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" style={{width: '300px', height: '300px', marginLeft: '1px', marginTop: '-2%'}}></img>
            </div>
            <div className="title">
                <h1>Harry Hall</h1>
            </div>
            <div className="des">
                <p>Harry is known for being a famous chef on TV because of his multiple appearances.</p>
                <button>Read More...</button>
            </div>
        </div>
      </div>

        <footer>
            <ul className="social-icon">
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>

            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <p>@2022 Espresso Cafe | All rights reserved</p>
        </footer>
    </div>
  );
}
