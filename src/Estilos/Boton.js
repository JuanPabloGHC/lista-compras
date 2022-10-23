import styled from "styled-components";

const Boton = styled.button`
  background-color: gray;
  color: purple;
  font-size: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover{
  background-color: ${props => props.color ? "green" : "red"};
  color: black;
  font-size: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  }
`;

export default Boton;