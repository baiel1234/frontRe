import React, { useState } from 'react';
import './ProfilePage.css'; // Import CSS file
import ReactDOM from 'react-dom'; 
import ChatComponent from './ChatComponent';


const ProfilePage = ({ history }) => {
  // Define state variables for user information
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  // Function to handle form submission (if updating user information)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update user information
    console.log('User information updated:', { name, email, bio });
  };

  // Function to navigate to chat page
  const handleChatButtonClick = () => {
    // Navigate to chat page
    ReactDOM.render(<ChatComponent />, document.getElementById('root'));
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {/* Button to navigate to chat page */}
      <button onClick={handleChatButtonClick}>Go to Chat</button>
    </div>
  );
};

export default ProfilePage;
