import React from 'react';
import { Col,Row }  from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import logo from '../image/pic1.jpg';
import logo1 from '../image/pic2.jpg';
import logo2 from '../image/pic3.jpg';
import logo3 from '../image/pic4.jpg';
import logo4 from '../image/pic5.jpg';
import logo5 from '../image/pic6.jpg';

function  First () {
return (
<div id="sec1"   className="first-div" >
 <div>
  <Row>
    <Col lg={4}  md={6} sm={12}  >
      <Card   className="card-div">
      <Card.Body >
        <Card.Img  src={logo}    className="card-img" />
        <Card className="card-parent">
        <Card.Title className="card-title"> business startup</Card.Title>
        <Card.Text>
          Design & Development
        </Card.Text>
        </Card>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}  md={6} sm={12}  >
    <Card className="card-div">
        <Card.Body >
         <Card.Img  src={logo1}    className="card-img" />
        <Card className="card-parent">
        <Card.Title className="card-title"> business startup</Card.Title>
        <Card.Text>
          Design & Development
        </Card.Text>
        </Card>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}  md={6} sm={12}  >
    <Card  className="card-div">
      <Card.Body> 
        <Card.Img  src={logo2}    className="card-img" />
        <Card className="card-parent">
        <Card.Title className="card-title"> business startup</Card.Title>
        <Card.Text>
          Design & Development
        </Card.Text>
        </Card>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row>
    <Col lg={4}  md={6} sm={12}  >
      <Card   className="card-div">
      <Card.Body >
        <Card.Img  src={logo3}    className="card-img" />
        <Card className="card-parent">
        <Card.Title className="card-title"> business startup</Card.Title>
        <Card.Text>
          Design & Development
        </Card.Text>
        </Card>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}  md={6} sm={12}>
    <Card className="card-div">
        <Card.Body >
         <Card.Img  src={logo4}    className="card-img" />
        <Card className="card-parent">
        <Card.Title className="card-title"> business startup</Card.Title>
        <Card.Text>
          Design & Development
        </Card.Text>
        </Card>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}  md={6} sm={12}  >
    <Card  className="card-div">
      <Card.Body> 
        <Card.Img  src={logo5}    className="card-img" />
        <Card className="card-parent">
        <Card.Title className="card-title"> business startup</Card.Title>
        <Card.Text>
          Design & Development
        </Card.Text>
        </Card>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
</div>









);
};

export default  First;