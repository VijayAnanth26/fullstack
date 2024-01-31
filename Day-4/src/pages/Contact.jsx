// src/components/ContactPage.js
import { useState } from 'react';
import '../assets/css/ContactPage.css'; // Add styling if needed
import { Button } from 'rsuite';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for handling the contact form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label>
          Your Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Message:
          <textarea rows="5" value={message} onChange={handleMessageChange} required />
        </label>
        <Button className="btn" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
