import React from "react";
import styled from "styled-components";

const ActionLinkStyle = styled.p`
  cursor: pointer;
`;

const ActionLink = ({ linkText, onClick }) => {
  return (
    <ActionLinkStyle onClick={() => onClick()}>{linkText}</ActionLinkStyle>
  );
};

export default ActionLink;
