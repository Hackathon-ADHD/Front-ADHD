import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
`;

export const SideBar = styled.div`
  flex: 0 0 20%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
`;

export const MainWrapper = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #d8ebf2;
  overflow-x: hidden;
`;

export const SideBarButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SignupButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-grow: 1;
`;

export const SignupButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
