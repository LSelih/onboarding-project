import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  max-width: 20rem;
`;

const Search = styled.input`
  appearance: none;
  background-color: white;
  border: 1px solid #666666;
  border-radius: 4px;
  padding: 0 1rem 0 1rem;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 2rem;
  font-family: inherit;
  font-size: inherit;
  color: #666666;
`;

const SearchBar = ({ searchInput, handleSearchChange }) => {
  return (
    <Search
      type="search"
      id="language-search"
      value={searchInput}
      onChange={(e) => handleSearchChange(e)}
    />
  );
};

export default SearchBar;
