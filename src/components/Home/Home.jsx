import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../Home/Home.css"



function HomeComponent() {
  return (
    <Carousel>
      <Carousel.Item>
          <div className="hero-background">
            <img className="hero-image" src="https://img.freepik.com/foto-gratis/ama-casa-hermosa-joven-sosteniendo-galletas-recien-horneadas-bandeja-cocina_657921-1387.jpg?w=2000&t=st=1701041138~exp=1701041738~hmac=e2cbc6b90175d84a8e13b32c58e7527f45bb33215661fc1a75f0ab73e30b53b8" alt="Third slide" />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption>
          <h3>The best cake store in downtown</h3>
          <p>Where Every Slice is a Celebration!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div className="hero-background">
            <img className="hero-image" src="https://img.freepik.com/foto-gratis/torta-cumpleanos_23-2150734952.jpg?w=2000&t=st=1701042643~exp=1701043243~hmac=ba010ac091da7fe389bb674ce972a89a6e7c1dc8dc4fe2b6d95344ea974442cf" alt="Third slide" />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption>
          <h3>You have to eat one of our new cakes</h3>
          <p>Black Friday for the rest of the year!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div className="hero-background">
            <img className="hero-image" src="https://img.freepik.com/foto-gratis/delicioso-pastel-cumpleanos-velas_23-2150734922.jpg?w=826&t=st=1701042685~exp=1701043285~hmac=98517c62750ca8d0814e94cb83e80cbde7399deede3826aa3fa4f0b64bb34d19" alt="Third slide" />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption>
          <h3>Is your birthday_</h3>
          <p>50% off for our gift for you!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeComponent;