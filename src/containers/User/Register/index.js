/**
 * Created by sushanta on 2/21/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions';

let Register = ({ onRegisterBtnClick }) => {
  let email, password;
  let handleEmailChange = (e) => {
    email = e.target.value;
  };
  let handlePasswordChange = (e) => {
    password = e.target.value;
  };
  return (
    <div>
      <input type="email" onChange={handleEmailChange}/>
      <input type="password" onChange={handlePasswordChange}/>
      <button onClick={() => onRegisterBtnClick(email, password)}>Register</button>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};
const mapDispatchToProps = {
  onRegisterBtnClick: registerUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);