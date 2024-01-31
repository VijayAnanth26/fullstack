// UserProfileComponent.jsx
// import React from 'react';
import "../assets/css/profile.css";

const UserProfile = {
  username: 'john_doe',
  email: 'john.doe@example.com',
  role: 'User',
  // Add other user-related properties
  firstName: 'John',
  lastName: 'Doe',
  birthdate: '1990-01-01',
  country: 'United States',
  // ... add more properties as needed
};

const UserProfileComponent = () => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p>Username: {UserProfile.username}</p>
        <p>Email: {UserProfile.email}</p>
        <p>Role: {UserProfile.role}</p>
        {/* Additional information */}
        <p>First Name: {UserProfile.firstName}</p>
        <p>Last Name: {UserProfile.lastName}</p>
        <p>Birthdate: {UserProfile.birthdate}</p>
        <p>Country: {UserProfile.country}</p>
        {/* Display other profile properties as needed */}
      </div>
    </div>
  );
};

export default UserProfileComponent;
