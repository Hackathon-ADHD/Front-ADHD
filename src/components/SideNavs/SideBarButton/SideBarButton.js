import { useState, useEffect } from "react";
import { SideBarButtonStyle } from "./SideBarButtonStyle";

const SideBarButton = ({
  defaultIcon,
  hoveredIcon,
  children,
  isClicked,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isClicked) {
      setIsHovered(false);
    }
  }, [isClicked]);

  const handleClick = (event) => {
    if (isClicked) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick();
  };

  return (
    <SideBarButtonStyle
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      isHovered={isHovered || isClicked}
      isClicked={isClicked}
    >
      {isHovered || isClicked ? hoveredIcon : defaultIcon}
      <span>{children}</span>
    </SideBarButtonStyle>
  );
};

export default SideBarButton;
