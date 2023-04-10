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
  margin: 20px;
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

const IncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const MoneyDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  width: 122px;
  font-size: 14px;
  font-weight: 600;

  & span {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;
//function that triggers the view of the add transaction modal
const AddNewTransaction = ({ setButtonState, addTransactions }) => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState("Expense");

  //Function to initiate addition of new transaction
  const addTransaction = () => {
    addTransactions({
      amount: Number(amount),
      description: description,
      category: category,
      id: Date.now(),
    });
    setButtonState();
  };
  return (
    <NewTransactionContainer>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
      <RadioSelection>
        <input
          type="radio"
          value="Income"
          id="income"
          name="income"
          checked={category === "Income"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="Expense">Income</label>
        <input
          type="radio"
          value="Expense"
          id="expense"
          name="expense"
          checked={category === "Expense"}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="Expense">Expense</label>
      </RadioSelection>
      <AddTransactionButton onClick={addTransaction}>
        Add Transaction
      </AddTransactionButton>
    </NewTransactionContainer>
  );
};

const TransactionOverview = ({ addTransactions }) => {
  const [buttonState, setButtonState] = useState(false);
  return (
    <Wrapper>
      <BalanceView>
        Balance: $5000
        <AddTransactionButton onClick={() => setButtonState(!buttonState)}>
          {buttonState ? "Cancel" : "Add"}
        </AddTransactionButton>
      </BalanceView>
      {/* Render the new transaction modal only when the add button is clicked - when the buttonState is true */}
      {buttonState && (
        <AddNewTransaction
          setButtonState={setButtonState}
          addTransactions={addTransactions}
        />
      )}
      <IncomeExpenseContainer>
        <MoneyDiv isExpense={false}>
          Income <span>$10000</span>
        </MoneyDiv>
        <MoneyDiv isExpense={true}>
          Expense <span>$5000</span>
        </MoneyDiv>
      </IncomeExpenseContainer>
    </Wrapper>
  );
};

export default TransactionOverview;
