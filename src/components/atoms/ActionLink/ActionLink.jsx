import React from "react";
import styled from "styled-components";

const ActionLinkStyle = styled.p`
  cursor: pointer;
`;

const ActionLink = ({ linkText, onClick }) => {
  return (
    <ActionLinkStyle onClick={() => onClick()} data-testid="reset">
      {linkText}
    </ActionLinkStyle>
  );
};

export default ActionLink;
