import React from "react";

const InputSelect = ({ label, selectName, data }) => {
  return (
    <>
      <label htmlFor={selectName}>{label}</label>
      <select id={selectName} name={selectName}>
        {data.map((lang, index) => (
          <option key={index} value={lang.code}>
            {`${lang.code.toUpperCase()} - ${lang.name}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputSelect;
