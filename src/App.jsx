import styled from "styled-components";
import Expense from "./components/Expense";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 30px 0 10px;
`;

const Header = styled.h1`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;
function App() {
  return (
    <Wrapper>
      <Header>Expense Tracker</Header>
      <Expense />
    </Wrapper>
  );
}

export default App;
