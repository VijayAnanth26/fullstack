import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
      <Link to="/events">All Events</Link>
      <Link to="/events/tech-symposium">Tech Symposium</Link>
      <Link to="/events/leadership-summit">Leadership Summit</Link>
      {/* Add more links for other events as needed */}
    </div>
      <p>&copy; 2024 CorporateFlow Manager</p>
    </footer>
  );
};

export default Footer;
