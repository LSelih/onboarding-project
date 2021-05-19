import React from "react";

const DropdownButton = ({ btnText = "en", handleClick }) => {
  return <div onClick={() => handleClick()}>{btnText.toUpperCase()}</div>;
};

export default DropdownButton;
