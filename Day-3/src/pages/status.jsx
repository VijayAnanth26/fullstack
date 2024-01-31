import "../assets/css/status.css"

const StatusManagement = ({ bookings }) => {
  return (
    <div className="status-management">
      <h2>Booking Status</h2>
      {bookings.length === 0 ? (
        <p>No bookings recorded.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="booking-entry">
                <td>{booking.eventName}</td>
                <td>{new Date(booking.eventDate).toLocaleDateString()}</td>
                {/* Additional booking details can be added here */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StatusManagement;
