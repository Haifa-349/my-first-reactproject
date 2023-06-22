import React from "react"
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/anm1.jpg';
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";

function BasicExample() {
    return (
      <Navbar expand="md" id="nav1" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img alt="logo"
              src={logo}
              className="img1"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link href="#home" id="link1">Home</Nav.Link>
            <Nav.Link href="#skill" id="link1">skills</Nav.Link>
            <Nav.Link href="#projects" id="link1">projects</Nav.Link>
          </Nav>
          <div  className="r-icon">
            <Nav.Link href="https://www.facebook.com/profile.php?id=100080123053878&mibextid=ZbWKwL">
              <BsFacebook  className="icon1" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/haifaa-abualrub-2b9ba626b">
              <BsLinkedin  className="icon1" />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/abualrubhaifa?igshid=ZDc4ODBmNjlmNQ==">
              <BsInstagram  className="icon1" />
            </Nav.Link>
            <Nav.Link href = '#' className="ms-2" >
              <button className="btn1">
              Let's Connect
              </button>

            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
  }
  
  export default BasicExample;


