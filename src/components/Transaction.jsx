import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  padding: 10px 22px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  gap: 10px;
  & input {
    padding: 10px 12px;
    outline: none;
    border-radius: 10px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
  }
`;

const Transaction = ({ transacts }) => {
  return (
    <Wrapper>
      Transaction
      <input placeholder="search" />
    </Wrapper>
  );
};

export default Transaction;
