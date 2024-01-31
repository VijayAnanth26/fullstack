// PaymentPage.jsx

import React, { useState } from 'react';

const PaymentPage = ({ bookingId }) => {
  const [totalAmount] = useState(100); // Assuming total amount is 100 for example
  const [amountToBePaid] = useState(40); // 40% of the total amount for example
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMode, setPaymentMode] = useState(''); // Dropdown options can be added as needed
  const [error, setError] = useState('');

  // Static details
  const staticDetails = {
    totalAmount: 100,
    amountToBePaid: 40,
    balanceAmount: 60,
    paymentDate: '2024-08-15', // Sample date
    paymentMode: 'credit_card', // Sample payment mode
  };

  const handlePaymentSubmit = () => {
    // Perform validation or payment processing logic here
    if (!paymentDate || !paymentMode) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');

    // Calculate balance amount
    const balanceAmount = totalAmount - (amountToBePaid / 100) * totalAmount;

    // Perform the necessary actions with the payment details and booking ID
    console.log(`Processing payment for booking ID ${bookingId}`);
    console.log(`Total Amount: ${totalAmount}`);
    console.log(`Amount to be Paid: ${amountToBePaid}%`);
    console.log(`Balance Amount: ${balanceAmount}`);
    console.log(`Payment Date: ${paymentDate}`);
    console.log(`Payment Mode: ${paymentMode}`);
    // You can add additional logic here, such as updating the payment status in your database

    // Redirect the user to a success page or any other desired page
    // Replace '/payment-success' with the actual success page path
    // You might also want to clear the form or update the UI to indicate success
    // For simplicity, let's just log a success message
    console.log('Payment successful');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Total Amount: ${staticDetails.totalAmount}</p>
      <p>Amount to be Paid: {staticDetails.amountToBePaid}%</p>
      <p>Balance Amount: ${staticDetails.balanceAmount}</p>
      <p>Payment Date: {staticDetails.paymentDate}</p>
      <p>Payment Mode: {staticDetails.paymentMode}</p>
      <label>
        Payment Date:
        <input
          type="date"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
        />
      </label>
      <label>
        Payment Mode:
        <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
          <option value="">Select Payment Mode</option>
          <option value="credit_card">Credit Card</option>
          <option value="debit_card">Debit Card</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
      </label>
      {error && <p className="error">{error}</p>}
      <button type="button" onClick={handlePaymentSubmit}>
        Submit Payment
      </button>
    </div>
  );
};

export default PaymentPage;
