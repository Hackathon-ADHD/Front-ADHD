import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../../assets/images/LogoImage.png";
import { useRecoilValue } from "recoil";
import { profileNameState } from "../../../recoils/atoms/loginState";
import * as S from "./ProfileHeaderStyle";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const profileName = useRecoilValue(profileNameState);

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <S.SideBarLogoNicknameWrapper>
      <S.LogoWrapper>
        <img src={LogoImage} alt="logo-image" onClick={handleClickLogo} />
      </S.LogoWrapper>
      <S.NicknameWrapper>
        <S.NicknameText>{profileName} 님</S.NicknameText>
        <S.QuestionText>오늘 하루는 어떠셨나요?</S.QuestionText>
      </S.NicknameWrapper>
    </S.SideBarLogoNicknameWrapper>
  );
};

export default ProfileHeader;
