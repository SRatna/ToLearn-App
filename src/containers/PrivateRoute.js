/**
 * Created by sushanta on 2/22/18.
 */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={() => isAuthenticated ? <Component {...rest} /> : <Redirect to='/login'/>}/>
);
const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
