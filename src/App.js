import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Shape = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
`;

const Rectangle = styled(Shape)``;
const Triangle = styled(Shape)`
  border-bottom: 50px solid blue;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const Circle = styled(Shape)`
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: orange;
  border-style: none;
  border-radius: 10px;
  align-self: center;
  color: white;
  line-height: 50px;
`;

const Input = styled.input.attrs({ required: true, type: "text" })`
  background-color: ${(props) => props.bgColor};
`;

function App() {
  return (
    <Father>
      <Rectangle bgColor="teal" width="100px" height="100px" />
      <Triangle />
      <Circle bgColor="red" width="100px" height="100px" />
      <Button bgColor="red">Login</Button>
      <Button as="a">Login</Button>
      <Input bgColor="red" />
    </Father>
  );
}

export default App;
