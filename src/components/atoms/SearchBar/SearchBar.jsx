import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  max-width: 20rem;
  height: 2.1rem;
  border: 1px solid #666666;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const Search = styled.input`
  appearance: none;
  border: none;
  padding: 0 1rem 0 1rem;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  font-family: inherit;
  font-size: inherit;
  color: #666666;
`;

const SearchBar = ({ searchInput, handleSearchChange }) => {
  return (
    <SearchContainer>
      <Search
        type="search"
        id="language-search"
        value={searchInput}
        onChange={(e) => handleSearchChange(e)}
      />
      <FaSearch />
    </SearchContainer>
  );
};

export default SearchBar;
