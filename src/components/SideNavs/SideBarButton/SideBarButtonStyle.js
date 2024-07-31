import styled from "styled-components";

export const SideBarButtonStyle = styled.div`
  width: 80%;
  padding: 15px 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  cursor: ${({ isClicked }) => (isClicked ? "default" : "pointer")};
  border: 2px solid transparent;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  ${({ isHovered }) =>
    isHovered &&
    `
    background-color: #e9ecef;
    border-radius: 30px;
    font-weight: 700;
    color: black;
  `}

  svg {
    margin-right: 20px;
  }

  span {
    font-size: 1rem;
  }
`;
