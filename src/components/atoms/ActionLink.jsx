import React from "react";

const ActionLink = ({ linkText, onClick }) => {
  return <p onClick={() => onClick}>{linkText}</p>;
};

export default ActionLink;
