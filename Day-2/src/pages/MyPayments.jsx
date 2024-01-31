// MyPaymentPage.jsx
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const MyPaymentPage = () => {
  // Static placeholder data for payments
  const allPayments = [
    { id: 1, eventName: 'Conference 2024', paymentDate: '2024-03-15', amount: 100 },
    { id: 2, eventName: 'Product Launch Party', paymentDate: '2024-04-01', amount: 50 },
    // Add more payments as needed
  ];

  return (
    <div>
      <h2 className="mt-4 mb-3">My Payments</h2>
      <div className="row">
        {allPayments.map((payment) => (
          <div key={payment.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{payment.eventName}</h5>
                <p className="card-text">Payment Date: {payment.paymentDate}</p>
                <p className="card-text">Amount: ${payment.amount}</p>
                {/* Add more details if needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPaymentPage;
