/**
 * Created by sushanta on 2/22/18.
 */
import React, { Component } from 'react';
import NavBar from '../NavBar';
import { saveToLearnText, addToLearn } from '../../actions';
import { connect } from 'react-redux';
import { getToLearnsRefApi } from '../../api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AddToLearnBar from './components/AddToLearnBar';
import ToLearnItem from './components/ToLearnItem';
import PersonSvg from './components/PersonSvg';
import BookSvg from './components/BookSvg';
import ClockSvg from './components/ClockSvg';
import moment from 'moment';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLearnText: ''
    };
  }
  componentDidMount() {
    let self = this;
    const toLearnsRef = getToLearnsRefApi();
    toLearnsRef.on('child_added', function (toLearn) {
      let item = {...toLearn.val(), key: toLearn.key};
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
        <AddToLearnBar>
          <Input
            type="text"
            onChange={this.handleToLearnTextChange}
            value={this.state.toLearnText}/>
          <Button
            onClick={() => {
              if (this.state.toLearnText === '') return;
              this.props.onToLearnTextSaveBtnClick(this.state.toLearnText);
              this.setState({
                toLearnText: ''
              });
            }}>
            Add
          </Button>
        </AddToLearnBar>
        <div>
          {
            this.props.toLearnItems.map(item => (
              <ToLearnItem key={item.key}>
                <BookSvg/>
                <span>{item.text}</span><br/>
                <PersonSvg/>
                <span>{item.email.split('@')[0]}</span><br/>
                <ClockSvg/>
                <span>{moment(item.createdAt).fromNow()}</span>
              </ToLearnItem>
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
  onToLearnTextSaveBtnClick: saveToLearnText, addToLearn
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);