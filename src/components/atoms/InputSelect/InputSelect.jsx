import React from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  max-width: 20rem;
`;

const CustomLabel = styled.label`
  color: #666666;
  font-size: 0.8rem;
`;

const CustomSelect = styled.select`
  appearance: none;
  background-color: white;
  border: 1px solid #666666;
  border-radius: 4px;
  padding: 0 1rem 0 1rem;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
  height: 2rem;
  font-family: inherit;
  font-size: inherit;
`;

const InputSelect = ({
  label,
  selectName,
  data,
  handleSelectionChange,
  selectedLanguage,
}) => {
  return (
    <SelectWrapper>
      <CustomLabel htmlFor={selectName}>{label}</CustomLabel>
      <CustomSelect
        id={selectName}
        value={selectedLanguage}
        onChange={(e) => handleSelectionChange(e)}
        data-testid="select"
        role="select"
      >
        {data.map((lang, index) => (
          <option
            key={index}
            value={lang.code}
            data-name={lang.name}
            data-testid="select-option"
          >
            {`${lang.code.toUpperCase()} - ${lang.name}`}
          </option>
        ))}
      </CustomSelect>
    </SelectWrapper>
  );
};

export default InputSelect;
