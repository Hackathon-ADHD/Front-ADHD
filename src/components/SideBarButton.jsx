import React, { useCallback, useState } from "react";
import * as S from "../pages/Home/HomeStyle";

const SideBarButton = ({ defaultIcon, hoveredIcon, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleOnMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <S.SideBarButton
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={onClick}
    >
      {isHovered ? hoveredIcon : defaultIcon}
      <span>{children}</span>
    </S.SideBarButton>
  );
};

export default SideBarButton;
