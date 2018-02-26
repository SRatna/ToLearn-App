/**
 * Created by sushanta on 2/21/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorBox from '../components/ErrorBox';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  render () {
    const { onRegisterBtnClick, errorMessage } = this.props;
    return (
      <Wrapper>
        <div>
          {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
          <Card>
            <label>Email</label>
            <Input type="email" onChange={this.handleEmailChange}/>
            <label>Password</label>
            <Input type="password" onChange={this.handlePasswordChange}/>
            <Button onClick={() => onRegisterBtnClick(this.state.email, this.state.password)}>Register</Button>
            <p style={{fontSize: '15px'}}>
              <Link to='/login'>Login Now</Link>{' '}
              if you already have an account.
            </p>
          </Card>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.user.errorMessage
  }
};

const mapDispatchToProps = {
  onRegisterBtnClick: registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);