/**
 * Created by sushanta on 2/22/18.
 */
import styled from 'styled-components';
const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  border: 3px solid palevioletred;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  transition: 0.8s;
  outline: none;
  cursor: pointer;
  &:hover {
    background: palevioletred;
    color: white;
  }
`;
export default Button;