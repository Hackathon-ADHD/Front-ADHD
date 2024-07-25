import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 80%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  &:hover {
    background-color: #e9ecef;
    border-radius: 30px;
    font-weight: 700;
    color: black;
  }

  svg {
    margin-right: 20px;
  }

  span {
    font-size: 1rem;
  }
`;

const SideBarButton = ({ defaultIcon, hoveredIcon, children, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <StyledButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isHovered ? hoveredIcon : defaultIcon}
      <span>{children}</span>
    </StyledButton>
  );
};

export default SideBarButton;
