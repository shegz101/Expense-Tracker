import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 10px;
  width: 100%;
`;

const BalanceView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
`;

const AddTransactionButton = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  outline: none;
  cursor: pointer;
  border: 1px solid transparent;
`;

const NewTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 12px;
  padding: 15px 20px;
  margin: 10px 20px;
  width: 100%;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 5px;
    border: 1px solid #e6e8e9;
  }
`;

const RadioSelection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;
//function that triggers the view of the add transaction modal
const addNewTransaction = () => {
  return (
    <NewTransactionContainer>
      <input placeholder="Amount" />
      <input placeholder="Description" />
      <RadioSelection>
        <input type="radio" value="Expense" id="expense" name="expense" />
        <label htmlFor="Expense">Expense</label>
        <input type="radio" value="Income" id="income" name="income" />
        <label htmlFor="Expense">Income</label>
      </RadioSelection>
      <AddTransactionButton>Add Transaction</AddTransactionButton>
    </NewTransactionContainer>
  );
};

const TransactionOverview = () => {
  //state to track if we ahould display add or cancel for transaction button
  const [buttonState, setButtonState] = useState(false);
  return (
    <Wrapper>
      <BalanceView>
        Balance: $1000
        <AddTransactionButton onClick={() => setButtonState(!buttonState)}>
          {buttonState ? "Cancel" : "Add"}
        </AddTransactionButton>
      </BalanceView>
      {/* Render the new transaction modal only when the add button is clicked - when the buttonState is true */}
      {buttonState && addNewTransaction()}
    </Wrapper>
  );
};

export default TransactionOverview;
