import React, { useState } from 'react'; 
import ReactDOM from 'react-dom'; 
 
const Header = () => { 
  return ( 
    <div style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px', textAlign: 'left' }}> 
      <h1 style={{ margin: 0 }}>HOBBYS</h1> 
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
    <div style={{ maxWidth: '400px', margin: '20px', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer' }}>Log In</button>
        <button onClick={onToggleSignUp} style={{ backgroundColor: 'transparent', color: '#007bff', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>Sign Up</button>
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
    <div style={{ maxWidth: '400px', margin: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer' }}>Sign Up</button>
        <button onClick={onToggleLogin} style={{ backgroundColor: 'transparent', color: '#007bff', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Log In</button>
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
  return (
    <div style={{ backgroundColor: '#add8e6', minHeight: '100vh' }}>
      <Header />
      {isLogin ? <Login onSubmit={handleLogin} onToggleSignUp={handleToggleSignUp} /> : <SignUp onSubmit={handleSignUp} onToggleLogin={handleToggleLogin} />}
    </div>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));
