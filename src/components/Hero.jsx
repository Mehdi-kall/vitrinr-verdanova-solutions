import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Hero.css'; // <-- tu vas créer ce fichier pour le style

function Hero() {
  return (
    <div classNameNameName="hero-section d-flex align-items-center">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/assets/images/green-tech.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="src/assets/images/green-tech.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="src/assets/images/green-tech.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
