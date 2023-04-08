import React, { useState } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import TransactionOverview from "./TransactionOverview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 20px 0 10px;
  width: 300px;
`;

const Expense = () => {
  const [transacts, PopulateTransacts] = useState([]);

  const addTransactions = (payload) => {
    const transactsArray = [...transacts];
    transactsArray.push(payload);
    PopulateTransacts(transactsArray);
  };

  return (
    <Wrapper>
      <TransactionOverview addTransactions={addTransactions} />
      <Transaction trnsacts={transacts} />
    </Wrapper>
  );
};

export default Expense;
