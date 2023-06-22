import React  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo  from '../image/anm4.jpg'
import {Container,Col,Row} from 'react-bootstrap'

function Form1() {
return (
    <div  id="second-sec" className="sec2"  >
      <Container className="sec2-div">
        <Row className="align-items-center">
          <Col lg={6}  sm={12} className='justify-content-center'>
      <div className="image-div ">
          <img src={logo}  className="anm-img2" alt="animation2"/>
          </div>
          </Col>

    <Col  lg={6}   sm={12} className="f1">
      <h2 className="title-form1">Get In Touch</h2>
 <Form  className="form1">
      <Row>
          <Col size={12} sm={6} className="px-1">
            <Form.Control type="text" placeholder="First name"   id="t1"/>
          </Col>
          <Col size={12} sm={6} className="px-1">
          <Form.Control type="text" placeholder="Last name"     id="t1"/>
          </Col>
          <Col size={12} sm={6} className="px-1">
            <Form.Control type="email" placeholder="Enter email"  id="t1"/>
          </Col>
          <Col size={12} sm={6} className="px-1">
          <Form.Control type="number" placeholder="phone No."  id="t1"/>
          </Col>
          <Col size={12} sm={12} className="px-1">
            <Form.Control as="textarea" rows="8"    placeholder="Message"  className="textare1"/>
          <Button variant="primary" type="submit"  className="btn3">
            Submit
          </Button>
          </Col>
      </Row>
</Form>
</Col>
</Row>
 </Container>
   </div>
);
};
export default Form1;