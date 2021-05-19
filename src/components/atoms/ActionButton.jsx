import React from "react";

const ActionButton = ({ btnText = "en", handleClick }) => {
  return <button onClick={() => handleClick()}>{btnText.toUpperCase()}</button>;
};

export default ActionButton;
