/**
 * Created by sushanta on 2/22/18.
 */
import React from 'react';
import NavBar from '../NavBar';
import { saveToLearnText } from '../../actions';
import { connect } from 'react-redux';

let Home = ({ onToLearnTextSaveBtnClick }) => {
  let toLearnText;
  let handleToLearnTextChange = (e) => {
    toLearnText = e.target.value;
  };
  return (
    <div>
      <NavBar/>
      <div>
        <input type="text" onChange={handleToLearnTextChange}/>
        <button onClick={() => onToLearnTextSaveBtnClick(toLearnText)}>Submit</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onToLearnTextSaveBtnClick: saveToLearnText
};
export default connect(null, mapDispatchToProps)(Home);