import styled from "styled-components";
import Transaction from "./Transaction";
import TransactionOverview from "./TransactionOverview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 30px 0 10px;
  width: 360px;
`;

const Expense = () => {
  return (
    <Wrapper>
      <TransactionOverview />
      <Transaction />
    </Wrapper>
  );
};

export default Expense;
