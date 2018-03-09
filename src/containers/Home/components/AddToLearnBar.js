/**
 * Created by sushanta on 3/7/18.
 */
import styled from 'styled-components';
import React, { Component } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const AddToLearnBar = styled.div`
  display: flex;
  padding: 10px;
  input {
    margin: 0 5px 0 0;
  }
  button {
    margin-top: 0;
    flex: 1;
  }
`;

class AddToLearnBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLearnText: ''
    };
  }

  handleToLearnTextChange = (e) => {
    this.setState({
      toLearnText: e.target.value
    })
  };

  handleAddToLearnBtnClick = () => {
    if (this.state.toLearnText === '') return;
    this.props.saveToLearnText(this.state.toLearnText);
    this.setState({
      toLearnText: ''
    });
  };

  render() {
    return (
      <AddToLearnBar>
        <Input
          type="text"
          onChange={this.handleToLearnTextChange}
          value={this.state.toLearnText}/>
        <Button
          onClick={this.handleAddToLearnBtnClick}>
          Add
        </Button>
      </AddToLearnBar>
    )
  }
}
export default AddToLearnBarComponent;