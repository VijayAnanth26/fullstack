// EventBookingForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../assets/css/bookingpage.css'; // Import your custom CSS file

// Static or dummy values
const staticEvent = {
  eventName: 'Sample Event',
  eventDate: '2024-08-15',
  eventPrice: 50,
};

const EventBookingForm = ({ onBookingSubmit }) => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [username, setUsername] = useState('');
  const [headcount, setHeadcount] = useState(1);
  const [error, setError] = useState('');

  const handleBookingSubmit = () => {
    if (!username.trim() || !headcount || headcount < 1) {
      setError('Please fill in all fields and provide a valid headcount.');
      return;
    }

    setError('');
    // Calculate total price based on headcount and event price
    const totalPrice = headcount * staticEvent.eventPrice;

    // Pass the booking details to the parent component
    onBookingSubmit({
      eventName: staticEvent.eventName,
      eventDate: staticEvent.eventDate,
      username,
      headcount,
      totalPrice,
    });

    // Reset form fields
    setUsername('');
    setHeadcount(1);

    // Navigate to the payment page after successful booking submission
    navigate('/payment'); // Replace '/payment' with the actual path to your payment page
  };

  return (
    <div className="booking-form-container">
      <h2>Event Booking Form</h2>
      <p>Event: {staticEvent.eventName}</p>
      <p>Date: {staticEvent.eventDate}</p>
      <p>Price: ${staticEvent.eventPrice}</p>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Headcount:
          <input type="number" value={headcount} onChange={(e) => setHeadcount(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button className='btn' type="submit" onClick={handleBookingSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventBookingForm;
