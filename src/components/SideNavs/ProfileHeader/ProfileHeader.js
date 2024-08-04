import { useNavigate } from "react-router-dom";
import LogoImage from "../../../assets/images/LogoImage.png";
import { useRecoilValue } from "recoil";
import { profileNameState } from "../../../recoils/atoms/loginState";
import * as S from "./ProfileHeaderStyle";
import { useEffect, useState } from "react";

const ProfileHeader = ({ resetHomeClick }) => {
  const navigate = useNavigate();
  const profileName = useRecoilValue(profileNameState);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickLogo = () => {
    if (resetHomeClick) {
      resetHomeClick();
    }
    navigate("/");
  };

  return (
    <S.SideBarLogoNicknameWrapper>
      <S.LogoWrapper>
        <img src={LogoImage} alt="logo-image" onClick={handleClickLogo} />
      </S.LogoWrapper>
      <S.NicknameWrapper>
        <S.NicknameText>{profileName} 님</S.NicknameText>
        <S.QuestionText>
          오늘 하루는 어떠셨나요?
          {isMobile ? <div>PLUS+ 구독</div> : <span>PLUS+ 구독</span>}
        </S.QuestionText>
      </S.NicknameWrapper>
    </S.SideBarLogoNicknameWrapper>
  );
};

export default ProfileHeader;
