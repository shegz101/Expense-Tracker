import styled from "styled-components";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Montserrat", sans-serif;
  padding: 10px 22px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  gap: 10px;
  & input {
    padding: 10px 12px;
    outline: none;
    width: 100%;
    border-radius: 10px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #e6e8e9;
  border-radius: 2px;
  align-items: center;
  font-weight: bold;
  width: 100%;
  justify-content: space-between;
  border-right: 4px solid ${({ isExpense }) => (isExpense ? "red" : "green")};
`;

const TransactsRows = ({ payload }) => {
  return (
    <Row isExpense={payload?.category === "Expense"}>
      <span>{payload.description}</span>
      <span>${payload.amount}</span>
      <AiOutlineDelete />
      <AiOutlineEdit />
    </Row>
  );
};

const Transaction = ({ transacts }) => {
  const [filteredTransacts, setFilteredTransacts] = useState(transacts);
  const [searchInput, setSearchInput] = useState("");
  return (
    <Wrapper>
      Transaction
      <input
        placeholder="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {filteredTransacts?.length > 0
        ? filteredTransacts.map((payload) => (
            <TransactsRows payload={payload} />
          ))
        : ""}
    </Wrapper>
  );
};

export default Transaction;
