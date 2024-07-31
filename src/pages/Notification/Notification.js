import React from "react";
import * as S from "./NotificationStyle";
import { IoIosCheckboxOutline } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { profileNameState } from "../../recoils/atoms/loginState";

const Notification = () => {
  const profileName = useRecoilValue(profileNameState);
  const notifications = [
    {
      id: 1,
      time: "17분 전",
      title: "관리자",
      message: "버전 1.02.1 으로 업데이트 완료",
      type: "new",
    },
    {
      id: 2,
      time: "3일 전",
      title: "1년 전 오늘",
      message: `${profileName}님의 1년 전 오늘이 업데이트 되었어요. 작년에는 어떤 감정이와 함께 했는지 보러 가실래요?`,
      type: "old",
    },
    {
      id: 3,
      time: "2달 전",
      title: "관리자",
      message: "버전 1.02.0 으로 업데이트 완료",
      type: "old",
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <RiNotification2Line color="gray" />
        알림
      </S.Header>
      <S.Section>
        <S.SectionTitle>오늘 받은 알림</S.SectionTitle>
        {notifications
          .filter((n) => n.type === "new")
          .map((notification) => (
            <S.Notification key={notification.id}>
              <S.NotificationContent>
                <S.NotificationTitle>
                  {notification.title}
                  <S.NotificationTime>{notification.time}</S.NotificationTime>
                </S.NotificationTitle>
                <S.NotificationMessage>
                  {notification.message}
                </S.NotificationMessage>
              </S.NotificationContent>
              <S.CheckboxWrapper>
                <IoIosCheckboxOutline />
              </S.CheckboxWrapper>
            </S.Notification>
          ))}
      </S.Section>
      <S.Section>
        <S.SectionTitle>이전 알림</S.SectionTitle>
        {notifications
          .filter((n) => n.type === "old")
          .map((notification) => (
            <S.Notification key={notification.id}>
              <S.NotificationContent>
                <S.NotificationTitle>
                  {notification.title}
                  <S.NotificationTime>{notification.time}</S.NotificationTime>
                </S.NotificationTitle>
                <S.NotificationMessage>
                  {notification.message}
                </S.NotificationMessage>
              </S.NotificationContent>
              <S.CheckboxWrapper>
                <IoIosCheckboxOutline />
              </S.CheckboxWrapper>
            </S.Notification>
          ))}
      </S.Section>
    </S.Container>
  );
};

export default Notification;
