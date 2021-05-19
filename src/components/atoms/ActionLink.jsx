import React from "react";
import styled from "styled-components";

const ActionLink = ({ linkText, onClick }) => {
  const ActionLinkStyle = styled.p`
    cursor: pointer;
  `;

  return (
    <ActionLinkStyle onClick={() => onClick()}>{linkText}</ActionLinkStyle>
  );
};

export default ActionLink;
