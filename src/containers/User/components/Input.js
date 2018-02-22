/**
 * Created by sushanta on 2/22/18.
 */
import styled from 'styled-components';
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #db709359;
  transition: 0.5s;
  outline: none;
  font-size: 20px;
  &:focus {
    border: 3px solid #db7093;
  }
`;
export default Input;