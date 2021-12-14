import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import img from "./usmall.jpg"
import "./Testimonials.css"

function Testimonials() {
    return <Carousel className = "crs">
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>SNNSMSN</h3>
      <p>SNMNSMNSMN SKNSNNSNSNSSSS</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>NSNS SNSN SSSJJS</h3>
      <p>NKNSKNSK SNSNS SKSNKS</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>GJSGJGSJ SJHJSHJSHJHS</h3>
      <p>skjskjaksjkajksakska skajksjakjskjaks</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
}    
export default Testimonials;