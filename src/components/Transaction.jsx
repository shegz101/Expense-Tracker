import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
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
