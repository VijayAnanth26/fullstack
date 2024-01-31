import "../assets/css/carousel.css"
import { Carousel } from 'rsuite';
import image1 from '../assets/images/pexels-teddy-yang-2263436.jpg';
import image2 from '../assets/images/pexels-designecologist-2526105.jpg';
import image3 from '../assets/images/pexels-jonas-von-werne-2897462.jpg';
import image4 from '../assets/images/pexels-matheus-bertelli-3321793.jpg';
import image5 from '../assets/images/pexels-pixabay-433452.jpg';

const CustomCarousel = () => (
  <Carousel autoplay className="custom-slider" style={{ height: '500px' }}>
    <img src={image1} alt="Image 1" className="carousel-image" />
    <img src={image2} alt="Image 2" className="carousel-image" />
    <img src={image3} alt="Image 3" className="carousel-image" />
    <img src={image4} alt="Image 4" className="carousel-image" />
    <img src={image5} alt="Image 5" className="carousel-image" />
  </Carousel>
);

export default CustomCarousel;
