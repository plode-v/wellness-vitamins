import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Img = styled.div`
    height: 60vh;
    width: 100vw;
    background-color: #${props=> props.bg};
    
`

function Slider() {
  return (
    <Carousel keyboard="true" slide="false">
      <Carousel.Item>
        <Img bg="3373944" />
            <Carousel.Caption>
                <h1>SUMMER SALE</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="submit" className='carousel-button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img bg="37394f" />
            <Carousel.Caption>
                <h1>WINTER SALE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button type="submit" className='carousel-button'>SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img bg="37ad40" />
            <Carousel.Caption>
            <h1>NEW ARRIVAL</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button type="submit" className="carousel-button">SHOP NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;