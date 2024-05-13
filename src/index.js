import React, { useState } from 'react'; 
import ReactDOM from 'react-dom'; 
import './App.css';
import ProfilePage from './ProfilePage';
 
const Header = () => {
  return (
    <div className="header">
      <h1>HOBBYS</h1>
    </div>
  );
};
 
const Login = ({ onSubmit, onToggleSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-input" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
        </div>
        <button type="submit" className="btn">Log In</button>
        <button onClick={onToggleSignUp} className="btn btn-transparent">Sign Up</button>
      </form>
    </div>
  );
};

 
const SignUp = ({ onSubmit, onToggleLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, username, password });
  };

  return (
    <div className="sign-up-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
        </div>
        <div>
          <label className="form-label">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-input" />
        </div>
        <div>
          <label className="form-label">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <button onClick={onToggleLogin} className="btn btn-transparent">Log In</button>
      </form>
    </div>
  );
};

 
 
 
const App = () => { 
  const [isLogin, setIsLogin] = useState(true); 
 
  const handleLogin = (userData) => { 
    console.log('Logging in with:', userData); 
    // Implement your login logic here 
  }; 
 
  const handleSignUp = (userData) => { 
    console.log('Signing up with:', userData); 
    // Implement your sign up logic here 
  }; 
 
  const handleToggleSignUp = () => {
    setIsLogin(!isLogin); // Toggles between login and sign up forms
  };

  const handleToggleLogin = () => {
    setIsLogin(!isLogin); // Toggles between login and sign up forms
  };
  const handleProfileClick = () => {
    // Navigate to ProfilePage
    ReactDOM.render(<ProfilePage />, document.getElementById('root'));
  };

  return (
    <div className="main-container">
      <Header />
      {isLogin ? (
        <>
          <Login onSubmit={handleLogin} onToggleSignUp={handleToggleSignUp} />
          <button onClick={handleProfileClick}>Go to Profile</button>
        </>
      ) : (
        <>
          <SignUp onSubmit={handleSignUp} onToggleLogin={handleToggleLogin} />
          <button onClick={handleProfileClick}>Go to Profile</button>
        </>
      )}
    </div>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));
