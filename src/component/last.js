import React from 'react';
import {Container,Col,Row}  from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Last (){
    return (
   
  <div  className="last-sec"     mx-auto text-md-start>
  <Container  className="last-card">
   <Row className="align-items-center">
    <Col    sm={12} className="para-div">
      <p className="last-para">  see my project at once &
        leave here your e-mail address please .</p>
       </Col>
       <Col sm={12}>
        <Form  className="form2">
          <Row>
            <Col>
          <Form.Control type="text" placeholder="Enter  your E-mail:" className="email-text" /> 
          </Col>
          <Col>
           <Button variant="primary" type="submit"  className="btn4">
            Submit
          </Button>
          </Col>
          </Row>
         </Form>
     </Col>
       </Row>
       <Row className="align-items-center">
      <Col  sm={12}>
        <div className="last-icon">
    <a href="https://www.facebook.com/profile.php?id=100080123053878&mibextid=ZbWKwL" ><BsFacebook  className="icon1" /></a> 
    <a href="https://www.linkedin.com/in/haifaa-abualrub-2b9ba626b" ><BsLinkedin  className="icon1" /></a>
    <a href="https://instagram.com/abualrubhaifa?igshid=ZDc4ODBmNjlmNQ==" ><BsInstagram  className="icon1" /></a>
  <div className="copy-div">
  <p className="l-para">
   -copyrights 2023- All rights reserved by  haifa M. abu al-rub 
  </p>
  </div>
  <div  className="last-img"> Logo </div>
  </div>
</Col>
</Row>
</Container>
</div>
);

};

export default Last;