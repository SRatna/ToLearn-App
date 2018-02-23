import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Register from '../containers/User/Register';
import Login from '../containers/User/Login';
import PrivateRoute from '../containers/PrivateRoute';
import Home from '../containers/Home';
import './App.css';

let App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
