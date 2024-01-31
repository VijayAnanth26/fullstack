// PaymentHistory.jsx
import React from 'react';

const PaymentHistory = ({ payments }) => {
  return (
    <div>
      <h2>Payment History</h2>
      {payments.length === 0 ? (
        <p>No payment history available.</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              <p>Event: {payment.eventName}</p>
              <p>Date: {payment.eventDate}</p>
              <p>Payment Method: {payment.paymentMethod}</p>
              {/* Add more payment details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
