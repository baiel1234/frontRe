import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import ChatComponent from './ChatComponent';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/ChatComponent" component={ChatComponent} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(<App />, document.getElementById('root'));
