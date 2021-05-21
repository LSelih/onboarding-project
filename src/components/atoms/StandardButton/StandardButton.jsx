import React from "react";
import styled from "styled-components";

const SearchButton = styled.div`
  width: 6rem;
  background: #2ac1db;
  color: white;
  font-size: 1.2rem;
  border: 1px solid #72d7e8;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.09s;
  cursor: pointer;
  &:hover {
    background: #2e4c52;
  }
`;

const StandardButton = ({ btnText = "", handleClick }) => {
  return (
    <SearchButton onClick={() => handleClick()}>
      {btnText.toUpperCase()}
    </SearchButton>
  );
};

export default StandardButton;
