/**
 * Created by sushanta on 2/22/18.
 */
import React, { Component } from 'react';
import NavBar from '../NavBar';
import { saveToLearnText } from '../../actions';
import { connect } from 'react-redux';
import { getTopToLearns } from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLearnText: ''
    };
  }
  componentDidMount() {
    this.props.getTopToLearns();
  }
  handleToLearnTextChange = (e) => {
    this.setState({
      toLearnText: e.target.value
    })
  };
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          <input
            type="text"
            onChange={this.handleToLearnTextChange}
            value={this.state.toLearnText}/>
          <button
            onClick={() => {
              this.props.onToLearnTextSaveBtnClick(this.state.toLearnText);
              this.setState({
                toLearnText: ''
              });
            }}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToLearnTextSaveBtnClick: saveToLearnText, getTopToLearns
};
export default connect(null, mapDispatchToProps)(Home);