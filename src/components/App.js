import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Register from '../containers/User/Register';
import './App.css';

let App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
