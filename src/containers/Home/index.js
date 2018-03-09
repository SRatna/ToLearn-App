/**
 * Created by sushanta on 2/22/18.
 */
import React, { Component } from 'react';
import NavBar from '../NavBar';
import { saveToLearnText, addToLearn, voteToLearn, updateToLearn } from '../../actions';
import { connect } from 'react-redux';
import { getToLearnsRefApi } from '../../api';
import LoadingSvg from '../../components/LoadingSvg';
import AddToLearnBar from './components/AddToLearnBar';
import ToLearnItem from './components/ToLearnItem';

class Home extends Component {
  componentDidMount() {
    let self = this;
    const toLearnsRef = getToLearnsRefApi();
    toLearnsRef.on('child_added', function (toLearn) {
      let item = {...toLearn.val(), key: toLearn.key};
      self.props.addToLearn(item);
    });
    toLearnsRef.on('child_changed', function (toLearn) {
      let item = {...toLearn.val(), key: toLearn.key};
      self.props.updateToLearn(item);
    });
  }

  render() {
    return (
      <div>
        <NavBar/>
        <AddToLearnBar saveToLearnText={this.props.saveToLearnText}/>
        {this.props.toLearnItems.length === 0
        && <LoadingSvg style={{ display: 'block', margin: 'auto', height: '35px'}}/>}
        <div>
          {
            this.props.toLearnItems.map(item => (
              <ToLearnItem
                key={item.key}
                item={item}
                voteToLearn={this.props.voteToLearn}
                currentUserId={this.props.currentUserId}/>
            ))
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    toLearnItems: state.toLearn.items,
    currentUserId: state.user.userId
  }
};
const mapDispatchToProps = {
  saveToLearnText, addToLearn, voteToLearn, updateToLearn
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);