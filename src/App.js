import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.span`
  color: ${(props) => props.bgColor};
`;

function App() {
  return (
    <Wrapper>
      <Emoji bgColor={"red"}>Hello</Emoji>
    </Wrapper>
  );
}

export default App;
