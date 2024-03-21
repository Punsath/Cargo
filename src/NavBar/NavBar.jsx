import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/navbar/logocorrect.png';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='navbody'>
      <Navbar expand="lg" variant="light" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <img
              src={logo}
              height="42"
              width="100"
              className="d-inline-block align-top"
           
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown title="HOME" id="home-dropdown" style={{ fontWeight: 'bold', color: 'black' , marginLeft: '30px' , fontSize: '14px'}}>
                <NavDropdown.Item as={NavLink} to="" style={{ color: 'black'  , fontSize: '14px'}}>Option 1</NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="PAGES" id="pages-dropdown" style={{ fontWeight: 'bold', color: 'black' ,marginLeft: '30px' , fontSize: '14px' }}>
                <NavDropdown.Item as={NavLink} to="" style={{ color: 'black' , fontSize: '14px' }}>Option 1</NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link as={NavLink} to="" activeClassName="active-nav" style={{  color: 'black' ,marginLeft: '30px' , fontSize: '14px' }}><b>TRACKING</b></Nav.Link>
              <NavDropdown title="SERVICES" id="services-dropdown" style={{ fontWeight: 'bold', color: 'black',marginLeft: '30px' , fontSize: '14px'  }}>
                <NavDropdown.Item as={NavLink} to="" style={{ color: 'black' , fontSize: '14px' }}>Option 1</NavDropdown.Item>
             
              </NavDropdown>
              <NavDropdown title="BLOG" id="blog-dropdown" style={{ fontWeight: 'bold', color: 'black',marginLeft: '30px'  , fontSize: '14px' }}>
                <NavDropdown.Item as={NavLink} to="" style={{ color: 'black' , fontSize: '14px' }}>Option 1</NavDropdown.Item>
                
              </NavDropdown>
              <Button as={NavLink} to="" variant="outline-light" style={{ backgroundColor: 'rgb(248, 192, 6)', color: 'white', borderRadius: '0', marginLeft: '30px' , fontSize: '14px' }}><b>SET A QUOTE</b></Button>
              <Button as={NavLink} to="" variant="outline-light" style={{ backgroundColor: 'black', color: 'white', borderRadius: '0', marginLeft: '20px',marginRight: '30px'  , fontSize: '14px'}}><b>SIGN IN</b></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
