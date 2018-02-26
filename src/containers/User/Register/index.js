/**
 * Created by sushanta on 2/21/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, clearErrorMessage } from '../../../actions';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorBox from '../components/ErrorBox';
import { Link } from 'react-router-dom';
import LoadingSvg from '../components/LoadingSvg';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  componentDidMount() {
    if (this.props.errorMessage) {
      this.props.clearErrorMessage();
    }
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
  handleFocusEvent = () => {
    if (this.props.errorMessage) {
      this.props.clearErrorMessage();
    }
  };
  render () {
    const { onRegisterBtnClick, errorMessage, isLoading } = this.props;
    return (
      <Wrapper>
        <div>
          {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
          <Card>
            <label>Email</label>
            <Input type="email" onChange={this.handleEmailChange} value={this.state.email} onFocus={this.handleFocusEvent}/>
            <label>Password</label>
            <Input type="password" onChange={this.handlePasswordChange} value={this.state.password} onFocus={this.handleFocusEvent}/>
            <Button onClick={() => onRegisterBtnClick(this.state.email, this.state.password)}>
              Register
              {isLoading && <LoadingSvg/>}
            </Button>
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
    errorMessage: state.user.errorMessage,
    isLoading: state.user.isLoading
  }
};

const mapDispatchToProps = {
  onRegisterBtnClick: registerUser,
  clearErrorMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);