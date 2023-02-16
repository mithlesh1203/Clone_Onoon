// Slidingproducts
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import slidding_1 from '../images/slidding_1.avif'
import slidding_2 from '../images/slidding_2.avif'
import slidding_3 from '../images/slidding_3.avif'
import slidding_4 from '../images/slidding_4.avif'
import slidding_5 from '../images/slidding_5.avif'
import slidding_6 from '../images/slidding_6.avif'
import OfferSlide from './OfferSlide';

function Slidingproducts() {
  return (
<>
<OfferSlide/>
<Col spam={6}>
<Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={slidding_1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={slidding_2}

          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={slidding_3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={slidding_4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={slidding_5}
          alt="Fith slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={slidding_6}
          alt="Sixth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Col>
</>
  );
}

export default Slidingproducts;