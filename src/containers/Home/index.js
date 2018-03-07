/**
 * Created by sushanta on 2/22/18.
 */
import React, { Component } from 'react';
import NavBar from '../NavBar';
import { saveToLearnText, addToLearn } from '../../actions';
import { connect } from 'react-redux';
import { getTopToLearns } from '../../actions';
import { getToLearnsRefApi } from '../../api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLearnText: ''
    };
  }
  componentDidMount() {
    let self = this;
    // this.props.getTopToLearns();
    const toLearnsRef = getToLearnsRefApi();
    toLearnsRef.on('child_added', function (toLearn) {
      let item = {...toLearn.val(), key: toLearn.key};
      console.log(item);
      self.props.addToLearn(item);
    });
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
        <div>
          {
            this.props.toLearnItems.map(item => (
              <div key={item.key}>
                <span>{item.text}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    toLearnItems: state.toLearn.items
  }
};
const mapDispatchToProps = {
  onToLearnTextSaveBtnClick: saveToLearnText, getTopToLearns, addToLearn
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);