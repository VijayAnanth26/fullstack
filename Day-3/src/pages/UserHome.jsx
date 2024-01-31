import { Button } from 'rsuite';
import CustomCarousel from '../components/Carousel';
import '../assets/css/UserHome.css';
import Footer from "../components/Footer"
import "../assets/css/Footer.css";
import { Link } from 'react-router-dom';
import EventNavbar from '../components/EventNavbar';

const HomePage = () => {
  return (
    <div>
      <div><EventNavbar/></div>
      <p/>
      <div className="home-container">
      <header>
        <h1>Welcome to Corporate Events Management</h1>
        <p>Your One-Stop Solution for Seamless Event Planning</p>
      </header>

      <CustomCarousel />
<p/>
      <section className="features">
        <div className="feature">
          <h2>Find Event Services</h2>
          <p>Browse a wide range of event services tailored to your needs.</p>
          <button className='btn'><Link to={'/findevents'} style={{ textDecoration : 'none' }} >Find Events</Link></button>
        </div>
        <div className="feature">
          <h2>Book with Ease</h2>
          <p>Streamlined process for booking and managing your events.</p>
          <button className='btn'><Link to={'/booking'} style={{ textDecoration : 'none' }}>Book Now</Link></button>
        </div>
        <div className="feature">
          <h2>Connect with Planners</h2>
          <p>Efficiently communicate with experienced event planners.</p>
          <button className='btn'><Link to={'/contact'} style={{ textDecoration : 'none' }} >Connect</Link></button>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Elevate Your Events?</h2>
        <p>Join us now and experience the next level of event management.</p>
        <Button className="btn">Sign Up Now</Button>
      </section>
      <Footer/>
    </div>
    </div>
  );
};

export default HomePage;
