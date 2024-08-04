import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #d8ebf2;
  overflow: hidden;
`;

export const SideBar = styled.div`
  height: 100vh;
  flex: 0 0 250px;
  min-width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
`;

export const MainWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
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
