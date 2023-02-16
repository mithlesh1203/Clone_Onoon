import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {  Row, Col } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";



function Product() {
  const navigate = useNavigate();
  const [isData, setIsData] = useState();

  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = () =>{
   axios.get("https://dummyjson.com/products")
    .then((res) => 
    setIsData(res.data.products)
  )
    .catch((error) => console.log("🚀 ~ file: App.js:18 ~ useEffect ~ response", error));
  } 
  
  const handleCart = (id)=>{
    navigate(`/ProductDesription/${id}`)
    // window.location.href = `/ProductDesription/${id}`
  }
  return (
    <>
     <Row span={20}  >
      {isData &&
        isData.map((datas) => {
          const { id, category, description, discountPercentage, images, price, rating, stock, title, thumbnail } = datas;
          return (
           
              <Col span={5} type= 'grid-auto-rows: auto' style={{ backgroundColor: '#fbfaff',margin: '2%', borderRadius:'5%'}} key={datas.id}
              onClick={()=>{
                handleCart(datas.id)
              }}

              >
               <Row type='flex'  style={{ height: '500px' }}>
               <Col >
               {/* <img
                  src={images[0]}
                  alt="product"
                  
                  style={{
                    width: "100%",
                    height: '350px' ,
                    objectFit: "cover",
                    // borderRadius:'5%'
                  }}
                /> */}
                <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={images[0]}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={images[1]}

          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={images[2]}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={images[3]}
          alt="Fourth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={images[4]}
          alt="Fith slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
               </Col>
               <Col>
               <ul>
                <h4>
                  <li>
                  {title}
                  </li>
                </h4>
                </ul>
               </Col>
               </Row>
              </Col>
            
          )
        })
      }
      </Row>
      {/* <FooterUI/> */}
    </>
  )
}

export default Product;