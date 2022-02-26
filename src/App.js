import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: -10px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Emoji = styled.div`
  font-size: 20px;
`;

function App() {
  return (
    <Wrapper>
      <Emoji>Hello</Emoji>
    </Wrapper>
  );
}

export default App;
