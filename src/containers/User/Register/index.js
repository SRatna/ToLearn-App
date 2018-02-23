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

let Register = ({ onRegisterBtnClick }) => {
  let email, password;
  let handleEmailChange = (e) => {
    email = e.target.value;
  };
  let handlePasswordChange = (e) => {
    password = e.target.value;
  };
  return (
    <Wrapper>
      <Card>
        <label>Email</label>
        <Input type="email" onChange={handleEmailChange}/>
        <label>Password</label>
        <Input type="password" onChange={handlePasswordChange}/>
        <Button onClick={() => onRegisterBtnClick(email, password)}>Register</Button>
      </Card>
    </Wrapper>
  )
};

const mapDispatchToProps = {
  onRegisterBtnClick: registerUser
};
export default connect(null, mapDispatchToProps)(Register);