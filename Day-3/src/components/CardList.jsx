import "../assets/css/CardList.css"
import Cards from "./Cards";
import EventNavbar from "./EventNavbar";

const events = [
    { id: 1, name: 'Conference 2024', description: 'A conference on corporate events.', imageURL: 'conference-image.jpg', lastUpdated: '3 mins ago' },
    { id: 2, name: 'Product Launch Party', description: 'Exciting product launch event.', imageURL: 'product-launch-image.jpg', lastUpdated: '5 mins ago' },
    { id: 3, name: 'Seminars Showcase', description: 'Informative sessions on various topics with guest speakers.', imageURL: 'seminars-showcase-image.jpg', lastUpdated: '10 mins ago' },
    { id: 4, name: 'Team-Building Extravaganza', description: 'Fun activities to boost team collaboration and morale.', imageURL: 'team-building-image.jpg', lastUpdated: '15 mins ago' },
    { id: 5, name: 'Corporate Training Workshops', description: 'Specialized training to enhance employee skills and knowledge.', imageURL: 'training-workshops-image.jpg', lastUpdated: '20 mins ago' },
    { id: 6, name: 'Networking Mixer', description: 'Opportunity for professionals to connect and build relationships.', imageURL: 'networking-mixer-image.jpg', lastUpdated: '25 mins ago' },
    { id: 7, name: 'Gala Dinner Celebration', description: 'Formal gathering with entertainment, awards, and speeches.', imageURL: 'gala-dinner-image.jpg', lastUpdated: '30 mins ago' },
    { id: 8, name: 'Trade Show Expo', description: 'Businesses showcasing their products to a targeted audience.', imageURL: 'trade-show-expo-image.jpg', lastUpdated: '35 mins ago' },
    { id: 9, name: 'Award Ceremony', description: 'Recognizing and celebrating achievements within the organization.', imageURL: 'award-ceremony-image.jpg', lastUpdated: '40 mins ago' },
    // { id: 10, name: 'Corporate Retreat', description: 'Off-site event for team-building and strategic planning.', imageURL: 'corporate-retreat-image.jpg', lastUpdated: '45 mins ago' },

  ];



const CardList = () => {
    return (
        <div>
          <div>
<EventNavbar/>
<p/>
          </div>
          <div className="card-list-container">
            {events.map(event => (
              <Cards key={event.id} event={event} />
            ))}
        </div>
        </div>
    );
};


export default CardList;
