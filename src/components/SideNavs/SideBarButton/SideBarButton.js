import { useState } from "react";
import { SideBarButtonStyle } from "./SideBarButtonStyle";

const SideBarButton = ({ defaultIcon, hoveredIcon, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SideBarButtonStyle
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isHovered ? hoveredIcon : defaultIcon}
      <span>{children}</span>
    </SideBarButtonStyle>
  );
};

export default SideBarButton;
