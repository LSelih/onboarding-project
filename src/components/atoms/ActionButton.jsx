import React from "react";

const ActionButton = ({ btnText = "en", handleClick }) => {
  return <div onClick={() => handleClick()}>{btnText.toUpperCase()}</div>;
};

export default ActionButton;
