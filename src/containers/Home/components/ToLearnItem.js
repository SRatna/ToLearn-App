/**
 * Created by sushanta on 3/7/18.
 */
import styled from 'styled-components';
import React, { Component } from 'react';
import PersonSvg from './PersonSvg';
import BookSvg from './BookSvg';
import ClockSvg from './ClockSvg';
import VoteSvg from './VoteSvg';
import moment from 'moment';

const ToLearnItem = styled.div`
  margin: 10px 10px 0;
  padding: 10px;
  box-shadow: 1px 4px 8px 1px rgba(219, 112, 147, 0.32);
  div {
    display: flex;
    span {
      flex: 1;
      margin: 0 0 7px 5px;
      font-size: 0.9em;
      text-transform: capitalize;
    }
    svg {
      margin-top: 1px;
    }
  }
`;

class ToLearnItemComponent extends Component {
  render() {
    const { item, voteToLearn, currentUserId } = this.props;
    return (
      <ToLearnItem
        onDoubleClick={() => voteToLearn(item.key)}>
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
        {
          item.votes ?
            (
              <div>
                <VoteSvg
                  voted={
                    !!Object.values(item.votes).find(vote => vote.userId === currentUserId)
                  }/>
                <span>
                          {Object.values(item.votes).length}
                  {Object.values(item.votes).length > 1 ? ' votes' : ' vote'}
                        </span>
              </div>
            ) :
            (
              <div>
                <VoteSvg voted={false}/>
                <span>0 vote</span>
              </div>
            )
        }
      </ToLearnItem>
    )
  }
}
export default ToLearnItemComponent;