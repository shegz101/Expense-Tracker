import React, { useEffect, useState } from "react";
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
  const [expsenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);

  //function to calculate the balance
  const calculateBalance = () => {
    //first set the expense and income to zero
    let expense = 0;
    let income = 0;
    //check if the category is expense or income, if it is expense, let's the expense
    transacts.map((payload) => {
      payload.category === "Expense"
        ? (expense = expense + payload.amount)
        : (income = income + payload.amount);
    });
    setExpenses(expense);
    setIncomes(income);
  };

  useEffect(() => {
    calculateBalance();
  }, [transacts]);

  const addTransactions = (payload) => {
    const transactsArray = [...transacts];
    transactsArray.push(payload);
    PopulateTransacts(transactsArray);
  };

  return (
    <Wrapper>
      <TransactionOverview
        addTransactions={addTransactions}
        expsenses={expsenses}
        incomes={incomes}
      />
      <Transaction transacts={transacts} />
    </Wrapper>
  );
};

export default Expense;
