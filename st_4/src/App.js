import './App.css';
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import {Form} from './components/Form';
import logo from './images/logo.png';
import {User} from './components/User';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark">
          <Container>
             <Navbar.Brand href="/">
              <img src={logo} style={{height: '80px' }} alt='logo'></img>
             </Navbar.Brand>
              <Nav className="me-auto" id='me-auto'>
                <Nav.Link as={Link} to="/" id="Home" style={{paddingLeft: '200px' }}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" id="About" style={{paddingLeft: '50px'}}>About</Nav.Link>
                <Nav.Link as={Link} to="/contact" id="Contact" style={{paddingLeft: '50px' }}>Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/login" id="Login" style={{paddingLeft: '50px' }}>Login</Nav.Link>
                <Nav.Link as={Link} to="/form" id="Form" style={{paddingLeft: '50px' }}>Form</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </>

      <div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/users/:id' element={<User/>}></Route>
        </Routes>
      </div>
      <div>
      </div>

    </div>
    </BrowserRouter>
      
  );
}

export default App;
