/**
 * Created by sushanta on 2/21/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, clearErrorMessage } from '../../../actions';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, Redirect } from 'react-router-dom';
import ErrorBox from '../components/ErrorBox';
import LoadingSvg from '../components/LoadingSvg';

class Login extends Component {
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
    const { onLoginBtnClick, errorMessage, isAuthenticated, isLoading } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <div>
          {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
          <Card>
            <label>Email</label>
            <Input type="email" onChange={this.handleEmailChange} value={this.state.email} onFocus={this.handleFocusEvent}/>
            <label>Password</label>
            <Input type="password" onChange={this.handlePasswordChange} value={this.state.password} onFocus={this.handleFocusEvent}/>
            <Button onClick={() => onLoginBtnClick(this.state.email, this.state.password)}>
              Login
              {isLoading && <LoadingSvg/>}
            </Button>
            <p style={{fontSize: '15px'}}>
              <Link to='/register'>Register Now</Link>{' '}
              if you don't have an account.
            </p>

          </Card>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    errorMessage: state.user.errorMessage,
    isLoading: state.user.isLoading
  }
};
const mapDispatchToProps = {
  onLoginBtnClick: loginUser,
  clearErrorMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);