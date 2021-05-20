import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { langData } from "../../utilities/ImportLanguages";
import languageList from "../../utilities/languageList.json";
import ActionButton from "../atoms/ActionButton";
import ActionLink from "../atoms/ActionLink";
import DropdownButton from "../atoms/DropdownButton";
import InputSelect from "../atoms/InputSelect";
import SearchBar from "../atoms/SearchBar";

const DropdownContainer = styled.div`
  width: 20rem;
  min-height: 3rem;
  border-radius: 8px;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #555555;
`;

const ActionButtonContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid white;
  border-radius: 4px;
  background: #333333;
  color: white;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: #888888;
    border: 1px solid #888888;
  }
`;

const DropdownMenu = styled.div`
  padding: 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const LanguageSelectDropdown = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [selectedMainLanguage, setSelectedMainLanguage] = useState({});
  const [selectedFallbackLanguage, setSelectedFallbackLanguage] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [languageData, setLanguageData] = useState([]);

  const onClick = () => setIsDropdownShowing(!isDropdownShowing);
  const dropdownRef = useRef(null);

  const defaultLanguage = {
    code: "en",
    name: "English",
  };

  const handleSelectionChangeMain = (e) => {
    const languageWithCode = languageList.filter((lang) => {
      if (lang.code === e.target.value) {
        return lang;
      }
    });

    setSelectedMainLanguage(languageWithCode[0]);
  };

  const handleSelectionChangeFallback = (e) => {
    const languageWithCode = languageList.filter((lang) => {
      if (lang.code === e.target.value) {
        return lang;
      }
    });
    setSelectedFallbackLanguage(languageWithCode[0]);
  };

  const handleSearch = () => {
    console.log("SEARCH");
  };

  const handleReset = () => {
    setSelectedMainLanguage(defaultLanguage);
    setSelectedFallbackLanguage(defaultLanguage);
    setIsDropdownShowing(true);
  };

  const handleSearchChange = (e) => {
    console.log(e);
    setSearchInput(e.target.value);
  };

  // Filter displayed language options by search input
  useEffect(() => {
    const filteredResults = languageData.filter((lang) => {
      if (lang.name.includes(searchInput)) {
        return lang;
      }
    });
    setLanguageData(filteredResults);
  }, [searchInput]);

  // Asynchronously load the languageData into state
  useEffect(() => {
    langData
      .then((res) => setLanguageData(res))
      .catch((err) => console.error(err));
  }, [langData]);

  useEffect(() => {
    const pageClick = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsDropdownShowing(!isDropdownShowing);
      }
    };
    if (isDropdownShowing) {
      document.addEventListener("click", pageClick);
    }

    return () => document.removeEventListener("click", pageClick);
  }, [isDropdownShowing]);

  return (
    <DropdownContainer>
      <ActionButtonContainer>
        <DropdownButton
          btnText={selectedMainLanguage.code}
          handleClick={onClick}
        />
      </ActionButtonContainer>
      {isDropdownShowing ? (
        <DropdownMenu ref={dropdownRef}>
          <SearchBar
            searchInput={searchInput}
            handleSearchChange={handleSearchChange}
          />

          <InputSelect
            label={"Select Language"}
            selectName={selectedMainLanguage.name}
            data={languageData}
            handleSelectionChange={handleSelectionChangeMain}
            selectedLanguage={selectedMainLanguage.code}
          />
          <InputSelect
            label={"Select Fallback Language"}
            selectName={selectedFallbackLanguage.name}
            data={languageData}
            handleSelectionChange={handleSelectionChangeFallback}
            selectedLanguage={selectedFallbackLanguage.code}
          />

          <ButtonContainer>
            <ActionButton
              type="button"
              btnText="Search"
              handleClick={handleSearch}
            />
            <ActionLink linkText="Reset selection" onClick={handleReset} />
          </ButtonContainer>
        </DropdownMenu>
      ) : null}
    </DropdownContainer>
  );
};

export default LanguageSelectDropdown;
