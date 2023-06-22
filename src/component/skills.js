import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import {Container,Col,Row} from 'react-bootstrap'

import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skill() {
  const percentage = 97;
 const percentage1 = 93;
 const percentage2 = 92;
 const percentage3 = 80;
 const percentage4 = 66;
 const percentage5 = 77;
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
      
return (
   <div id="skill">
      <Container >
        <Row className="container-skills">
          <Col >
       <div class="skill-div1">
        <h2  className='title-skill'>Skills</h2>
        <p className="para3">you can see my skills here</p>
        <div className="div-card">
        <Slider   {...settings}>
            <div className="d1">
            <CircularProgressbar value={percentage} text={`${percentage}%`} className="circle1"/>
            <Card.Title  className="card1">Html</Card.Title>
            </div>

            <div  className="d1">
            <CircularProgressbar value={percentage1} text={`${percentage1}%`} className="circle1"/>
            <Card.Title  className="card1">css</Card.Title>
            </div>

            <div  className="d1">
            <CircularProgressbar value={percentage2} text={`${percentage2}%`} className="circle1" />
            <Card.Title  className="card1">Html5 & css3</Card.Title>
            </div>

            <div  className="d1">
            <CircularProgressbar value={percentage3} text={`${percentage3}%`} className="circle1" />
            <Card.Title  className="card1">Bootstrap</Card.Title>
            </div>

            <div  className="d1">
            <CircularProgressbar value={percentage4} text={`${percentage4}%`} className="circle1"/>
            <Card.Title  className="card1">Javasvript</Card.Title>
            </div>

            <div  className="d1">
            <CircularProgressbar value={percentage5} text={`${percentage5}%`} className="circle1" />
            <Card.Title  className="card1">ReacrJs</Card.Title>
            </div>
       </Slider>
      </div>
      </div>
      </Col>
      </Row>
      </Container>
     </div>
);
};

export  default Skill;