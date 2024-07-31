import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  /* background-color: #e7f4f9; */
`;

export const Header = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Notification = styled.div`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationTitle = styled.span`
  display: block;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NotificationTime = styled.span`
  font-size: 12px;
  color: #999;
  margin-left: 10px;
`;

export const NotificationMessage = styled.p`
  font-size: 16px;
`;

export const CheckboxWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  /* color: #999; */
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;
