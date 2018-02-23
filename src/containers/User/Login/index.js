/**
 * Created by sushanta on 2/21/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, Redirect } from 'react-router-dom';
import ErrorBox from '../components/ErrorBox';

let Login = ({ onLoginBtnClick, errorMessage, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  let email, password;
  let handleEmailChange = (e) => {
    email = e.target.value;
  };
  let handlePasswordChange = (e) => {
    password = e.target.value;
  };
  return (
    <Wrapper>
      <div>
        {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
        <Card>
          <label>Email</label>
          <Input type="email" onChange={handleEmailChange}/>
          <label>Password</label>
          <Input type="password" onChange={handlePasswordChange}/>
          <Button onClick={() => onLoginBtnClick(email, password)}>Login</Button>
          <p style={{fontSize: '15px'}}>
            <Link to='/register'>Register Now</Link>{' '}
            if you don't have an account.
          </p>
        </Card>
      </div>
    </Wrapper>
  )
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    errorMessage: state.user.errorMessage
  }
};
const mapDispatchToProps = {
  onLoginBtnClick: loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);