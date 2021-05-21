import React from "react";

const DropdownButton = ({ btnText = "en", handleClick }) => {
  return (
    <div onClick={() => handleClick()} data-testid="dropdownbtn">
      {btnText.toUpperCase()}
    </div>
  );
};

export default DropdownButton;
