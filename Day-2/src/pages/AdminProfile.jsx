// AdminProfileComponent.jsx
// import React from 'react';
import "../assets/css/profile.css";

const AdminProfile = {
  username: 'admin',
  email: 'admin@example.com',
  role: 'Admin',
  // Add other admin-related properties
  department: 'IT',
  joinDate: '2020-01-01',
  permissions: ['Manage Users', 'Create Events', 'View Reports'],
  // ... add more properties as needed
};

const AdminProfileComponent = () => {
  return (
    <div className="profile-container">
      <h2>Admin Profile</h2>
      <div className="profile-info">
        <p>Username: {AdminProfile.username}</p>
        <p>Email: {AdminProfile.email}</p>
        <p>Role: {AdminProfile.role}</p>
        {/* Additional information */}
        <p>Department: {AdminProfile.department}</p>
        <p>Join Date: {AdminProfile.joinDate}</p>
        <p>Permissions: {AdminProfile.permissions.join(', ')}</p>
        {/* Display other profile properties as needed */}
      </div>
    </div>
  );
};

export default AdminProfileComponent;
