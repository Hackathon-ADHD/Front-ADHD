import ProfileHeader from "../../components/SideNavs/ProfileHeader/ProfileHeader";
import SideBarButtonList from "../../components/SideNavs/SideBarButtonList/SideBarButtonList";
import * as S from "../Home/HomeStyle";

const Diary = () => {
  return (
    <S.HomeContainer>
      <S.SideBarWrapper>
        <ProfileHeader />
        <S.SideBarButtonWrapper>
          <SideBarButtonList />
        </S.SideBarButtonWrapper>
      </S.SideBarWrapper>
      <S.MainWrapper></S.MainWrapper>
    </S.HomeContainer>
  );
};

export default Diary;
