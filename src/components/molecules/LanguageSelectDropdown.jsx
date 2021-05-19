import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import languageList from "../../utilities/languageList.json";
import ActionButton from "../atoms/ActionButton";
import InputSelect from "../atoms/InputSelect";

const LanguageSelectDropdown = () => {
  const DropdownContainer = styled.div`
    width: 24rem;
    min-height: 20rem;
    border-radius: 8px;
    padding: 1rem;
    background: #0ca69b;
    border: 1px solid black;
  `;

  const ActionButtonContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const DropdownMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: col;
    justify-content: center;
    padding: 2rem;
  `;

  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [selectedMainLanguage, setSelectedMainLanguage] = useState({});
  const [selectedFallbackLanguage, setSelectedFallbackLanguage] = useState({});

  const onClick = () => setIsDropdownShowing(!isDropdownShowing);
  const dropdownRef = useRef(null);

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
        <ActionButton
          btnText={selectedMainLanguage.code}
          handleClick={onClick}
        />
      </ActionButtonContainer>
      {isDropdownShowing ? (
        <DropdownMenu ref={dropdownRef}>
          <InputSelect
            label={"Select Language"}
            selectName={selectedMainLanguage.name}
            data={languageList}
            handleSelectionChange={handleSelectionChangeMain}
            selectedLanguage={selectedMainLanguage.code}
          />
          <InputSelect
            label={"Select Fallback Language"}
            selectName={selectedFallbackLanguage.name}
            data={languageList}
            handleSelectionChange={handleSelectionChangeFallback}
            selectedLanguage={selectedFallbackLanguage.code}
          />
        </DropdownMenu>
      ) : null}
    </DropdownContainer>
  );
};

export default LanguageSelectDropdown;
