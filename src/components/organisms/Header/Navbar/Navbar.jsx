import React from "react";
import styled from "styled-components";
import LanguageSelectDropdown from "../../../molecules/LanguageSelectDropdown/LanguageSelectDropdown";
import languageList from "../../../../utilities/languageList.json";

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
        <LanguageSelectDropdown listOfLanguages={languageList} />
        {/* <LanguageSelectDropdown
          listOfLanguages={fetch(
            "https://api.themoviedb.org/3/configuration/primary_translations?api_key=63d876ab894154767b72f8ee54b90147"
          )
            .then((res) => res.json())
            .then((data) => {
              return data.map((lang) => {
                return { code: lang, name: "" };
              });
            })}
        /> */}
      </StyledNavbar>
    </>
  );
};

export default Navbar;
