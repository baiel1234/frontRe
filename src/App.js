import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ProfilePage from './ProfilePage';
import ChatComponent from './ChatComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
