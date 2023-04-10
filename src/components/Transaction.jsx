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
`;

const Transaction = () => {
  return (
    <Wrapper>
      Transaction
      <input placeholder="search" />
    </Wrapper>
  );
};

export default Transaction;
