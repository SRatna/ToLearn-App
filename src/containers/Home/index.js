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
import LoadingSvg from '../../components/LoadingSvg';
import AddToLearnBar from './components/AddToLearnBar';
import ToLearnItem from './components/ToLearnItem';
import PersonSvg from './components/PersonSvg';
import BookSvg from './components/BookSvg';
import ClockSvg from './components/ClockSvg';
import VoteSvg from './components/VoteSvg';
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
    console.log(this.props.toLearnItems);
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
        {this.props.toLearnItems.length === 0
        && <LoadingSvg style={{ display: 'block', margin: 'auto', height: '35px'}}/>}
        <div>
          {
            this.props.toLearnItems.map(item => (
              <ToLearnItem key={item.key}>
                <div>
                  <BookSvg/>
                  <span>{item.text}</span>
                </div>
                <div>
                  <PersonSvg/>
                  <span>{item.email.split('@')[0]}</span>
                </div>
                <div>
                  <ClockSvg/>
                  <span>{moment(item.createdAt).fromNow()}</span>
                </div>
                <div>
                  <VoteSvg/>
                  <span>{item.voteCount} {item.voteCount > 1 ? ' votes' : ' vote'}</span>
                </div>
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