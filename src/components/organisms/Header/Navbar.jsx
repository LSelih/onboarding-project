import React from "react";
import styled from "styled-components";
import LanguageSelectDropdown from "../../molecules/LanguageSelectDropdown";

const StyledNavbar = styled.div`
  width: 90wv;
  height: 50px;
  padding: 1rem 0rem;
  background: rgb(3, 37, 65);
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <LanguageSelectDropdown />
      </StyledNavbar>
    </>
  );
};

export default Navbar;
