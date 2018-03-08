/**
 * Created by sushanta on 3/7/18.
 */
import styled from 'styled-components';
const ToLearnItem = styled.div`
  margin: 10px 10px 0;
  padding: 10px;
  box-shadow: 1px 4px 8px 1px rgba(219, 112, 147, 0.32);
  div {
    display: flex;
    span {
      flex: 1;
      text-align: justify;
      margin: 0 0 7px 5px;
      font-size: 0.86em;
      text-transform: capitalize;
    }
    svg {
      margin-top: 1px;
    }
  }
`;
export default ToLearnItem;