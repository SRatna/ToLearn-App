/**
 * Created by sushanta on 2/21/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorBox from '../components/ErrorBox';
import { Link } from 'react-router-dom';

let Register = ({ onRegisterBtnClick, errorMessage }) => {
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
          <Button onClick={() => onRegisterBtnClick(email, password)}>Register</Button>
          <p style={{fontSize: '15px'}}>
            <Link to='/login'>Login Now</Link>{' '}
            if you already have an account.
          </p>
        </Card>
      </div>
    </Wrapper>
  )
};

const mapStateToProps = state => {
  return {
    errorMessage: state.user.errorMessage
  }
};

const mapDispatchToProps = {
  onRegisterBtnClick: registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);