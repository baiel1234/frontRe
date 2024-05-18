import React, { useState } from 'react';
import './ProfilePage.css'; // Import CSS file
import ReactDOM from 'react-dom';
import ChatComponent from './ChatComponent';

const ProfilePage = ({ name: initialName, email: initialEmail, Hobby: initialHobby }) => {
  // Initialize state variables with initialName and initialEmail
  const [name, setName] = useState(initialName || 'John Doe');
  const [email, setEmail] = useState(initialEmail || 'john.doe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [Hobby, setHobby] = useState(initialHobby|| 'Worker');
  const [profilePic, setProfilePic] = useState('/images/user.jpg'); // Update path to image

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User information updated:', { name, email, bio });
  };

  const handleChatButtonClick = () => {
    ReactDOM.render(<ChatComponent />, document.getElementById('root'));
  };

  return (
    <div>
      <header className="header">HOBBIES</header>
      <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-picture-container">
          <img src={profilePic} alt="Profile" className="profile-picture" />
        </div>
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
          <div>
            <label>Hobby:</label>
            <input
              type="Hobby"
              value={Hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
          </div>
        </form>
        <button onClick={handleChatButtonClick}>Go to Chat</button>
      </div>
    </div>
  );
};

export default ProfilePage;
