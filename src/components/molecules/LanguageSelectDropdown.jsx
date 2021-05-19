import React, { useEffect, useRef, useState } from "react";
import languageList from "../../utilities/languageList.json";
import ActionButton from "../atoms/ActionButton";

const LanguageSelectDropdown = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [selectedMainLanguage, setSelectedMainLanguage] = useState({});

  const onClick = () => setIsDropdownShowing(!isDropdownShowing);
  const dropdownRef = useRef(null);

  const handleSelectionChange = (e) => {
    const selected = {
      name: e.target.name,
      code: e.target.value,
    };
    setSelectedMainLanguage(selected);
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
    <>
      <div>
        <ActionButton
          btnText={selectedMainLanguage.code}
          handleClick={onClick}
        />
        {/* <button onClick={onClick}>Button</button> */}
      </div>
      {isDropdownShowing ? (
        <div ref={dropdownRef}>
          <label htmlFor="languages">Label</label>
          <select
            name="languages"
            id="languages"
            onChange={(e) => handleSelectionChange(e)}
          >
            {languageList.map((lang, index) => (
              <option key={index} value={lang.code} name={lang.name}>
                {`${lang.code.toUpperCase()} - ${lang.name}`}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </>
  );
};

export default LanguageSelectDropdown;
